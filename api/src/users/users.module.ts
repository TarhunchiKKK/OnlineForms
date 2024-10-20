import { forwardRef, Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { RolesModule } from "src/roles/roles.module";
import { jwtConfig } from "src/shared/constants/jwt";

@Module({
    imports: [
        forwardRef(() => RolesModule),
        TypeOrmModule.forFeature([User]),
        JwtModule.registerAsync(jwtConfig),
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
