import { forwardRef, Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { UsersModule } from "src/users/users.module";
import { RolesController } from "./roles.controller";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { FormsModule } from "src/forms/forms.module";

@Module({
    imports: [
        FormsModule,
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
