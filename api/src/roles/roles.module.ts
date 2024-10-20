import { forwardRef, Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { UsersModule } from "src/users/users.module";
import { RolesController } from "./roles.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get("JWT_SECRET"),
                signOptions: {
                    expiresIn: configService.get("JWT_EXPIRATION"),
                },
            }),
        }),
    ],
    controllers: [RolesController],
    providers: [RolesService],
    exports: [RolesService],
})
export class RolesModule {}
