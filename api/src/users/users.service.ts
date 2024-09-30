import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { UserExistException } from "src/shared/exceptions/user-exist.exception";
import * as argon2 from "argon2";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

    public async create(createUserDto: CreateUserDto) {
        const existUser = await this.usersRepository.findOne({
            where: {
                email: createUserDto.email,
            },
        });

        if (existUser) {
            throw new UserExistException(createUserDto.email);
        }

        const password = await argon2.hash(createUserDto.password);

        return await this.usersRepository.save({
            ...createUserDto,
            password,
        });
    }

    public async findAll() {
        return await this.usersRepository.find();
    }

    public async findOneById(userId: string) {
        return await this.usersRepository.findOne({
            where: {
                id: userId,
            },
        });
    }

    public async findOneByEmail(email: string) {
        return await this.usersRepository.findOne({
            where: {
                email,
            },
        });
    }
}
