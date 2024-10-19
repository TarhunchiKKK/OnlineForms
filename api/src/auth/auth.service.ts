import { Injectable } from "@nestjs/common";
import { SignUpDto } from "./dto/sign-up.dto";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
import { UserNotFounException } from "src/auth/exceptions/user-not-found.exception";
import { IncorrectPasswordException } from "./exceptions/incorrect-password.exception";
import { AuthWithProviderDto } from "./dto/auth-with-provider.dto";
import * as argon2 from "argon2";
import { TUserProfile } from "./types/user-profile.type";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    private generateToken(userProfile: TUserProfile) {
        return this.jwtService.sign({
            id: userProfile.id,
            email: userProfile.email,
            password: userProfile.password,
            role: userProfile.role,
        });
    }

    private async validateUser(signInDto: SignInDto) {
        const user = await this.usersService.findOneByEmail(signInDto.email);

        if (!user) {
            throw new UserNotFounException();
        }

        const passwordsMath = await argon2.verify(user.password, signInDto.password);

        if (!passwordsMath) {
            throw new IncorrectPasswordException();
        }

        return user;
    }

    public async signUp(signUpDto: SignUpDto) {
        const user = await this.usersService.create(signUpDto);

        const accessToken = this.generateToken(user);

        return {
            user: user,
            access: accessToken,
        };
    }

    public async signIn(signInDto: SignInDto) {
        const user = await this.validateUser(signInDto);

        const accessToken = this.generateToken(user);

        const { password, ...userWithoutPassword } = user;

        return {
            user: userWithoutPassword,
            access: accessToken,
        };
    }

    public async authWithProvider(authDto: AuthWithProviderDto) {
        const existingUser = await this.usersService.findOneByEmail(authDto.email);

        if (existingUser) {
            const accessToken = this.generateToken(existingUser);

            const { password, ...userWithoutPassword } = existingUser;

            return {
                user: userWithoutPassword,
                access: accessToken,
            };
        }

        const user = await this.usersService.create({ ...authDto, password: null });

        const accessToken = this.generateToken(user);

        return {
            user: user,
            access: accessToken,
        };
    }
}
