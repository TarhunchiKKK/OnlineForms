import { Controller, Post, Body, Get, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { AuthWithProviderDto } from "./dto/auth-with-provider.dto";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { TAuthorizedRequest } from "./types/request";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/sign-up")
    public async signUp(@Body() signUpDto: SignUpDto) {
        return await this.authService.signUp(signUpDto);
    }

    @Post("/sign-in")
    public async signIn(@Body() signInDto: SignInDto) {
        return await this.authService.signIn(signInDto);
    }

    @Post("/provider")
    public async authWithProvider(@Body() authDto: AuthWithProviderDto) {
        return await this.authService.authWithProvider(authDto);
    }

    @Get("/profile")
    @UseGuards(JwtAuthGuard)
    public async getProfile(@Req() request) {
        return await this.authService.getProfile(request.user.id);
    }

    @Post("/refresh")
    @UseGuards(JwtAuthGuard)
    public async refreshAuthToken(@Req() request: TAuthorizedRequest) {
        return await this.authService.refreshAuthToken(request.user.id);
    }
}
