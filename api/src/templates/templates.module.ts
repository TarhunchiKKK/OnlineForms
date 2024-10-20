import { Module } from "@nestjs/common";
import { TemplatesService } from "./templates.service";
import { TemplatesController } from "./templates.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Template } from "./entities/template.entity";
import { JwtModule } from "@nestjs/jwt";
import { TemplatesGateway } from "./templates.gateway";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forFeature([Template]),
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
    controllers: [TemplatesController],
    providers: [TemplatesGateway, TemplatesService],
})
export class TemplatesModule {}
