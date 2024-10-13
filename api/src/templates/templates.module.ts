import { Module } from "@nestjs/common";
import { TemplatesService } from "./services/templates.service";
import { TemplatesController } from "./templates.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Template } from "./entities/template.entity";
import { FilledTemplate } from "./entities/filled-template.entity";
import { QuestionsModule } from "src/questions/questions.module";
import { FilledTemplatesService } from "./services/filled-templates.service";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        QuestionsModule,
        TypeOrmModule.forFeature([Template, FilledTemplate]),
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
    providers: [TemplatesService, FilledTemplatesService],
})
export class TemplatesModule {}
