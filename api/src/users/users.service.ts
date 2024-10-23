import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { ILike, In, Not, Repository } from "typeorm";
import { UserExistException } from "src/users/exceptions/user-exist.exception";
import * as argon2 from "argon2";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRoles } from "src/roles/enums/user-roles.enum";
import { UserStatuses } from "./enums/user-statuses.enum";
import { ChangeUserStatusDto } from "./dto/change-user-status.dto";
import { UserNotFoundException } from "./exceptions/user-not-found.exception";
import { ChangeUserRoleDto } from "./dto/change-user-role.dto";

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

        const password = createUserDto.password ? await argon2.hash(createUserDto.password) : null;

        return await this.usersRepository.save({
            ...createUserDto,
            role: UserRoles.AuthorizedUser,
            status: UserStatuses.Active,
            password,
        });
    }

    public async findAll() {
        return await this.usersRepository.find();
    }

    public async search(count: number, search: string, ids: string[]) {
        return await this.usersRepository.find({
            where: [
                {
                    id: Not(In(ids)),
                    email: ILike(`%${search}%`),
                },
                {
                    id: Not(In(ids)),
                    username: ILike(`%${search}%`),
                },
            ],
            take: count,
        });
    }

    public async findOneById(userId: string) {
        return await this.usersRepository.findOne({
            where: {
                id: userId,
            },
            relations: {
                templates: true,
                forms: true,
            },
        });
    }

    public async findMe(userId: string) {
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

    public async changeUserStatus(dto: ChangeUserStatusDto) {
        const user = await this.usersRepository.findOne({
            where: {
                id: dto.id,
            },
        });

        if (!user) {
            throw new UserNotFoundException(dto.id);
        }

        user.status = dto.status;

        return await this.usersRepository.save(user);
    }

    public async changeUserRole(dto: ChangeUserRoleDto) {
        const user = await this.usersRepository.findOne({
            where: {
                id: dto.id,
            },
        });

        if (!user) {
            throw new UserNotFoundException(dto.id);
        }

        user.role = dto.role;

        return await this.usersRepository.save(user);
    }

    public async remove(userId: string) {
        await this.usersRepository.delete(userId);
    }
}
