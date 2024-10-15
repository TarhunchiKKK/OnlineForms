import { Module } from "@nestjs/common";
import { TemplatesService } from "./services/templates.service";
import { TemplatesController } from "./templates.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Template } from "./entities/template.entity";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Question } from "./entities/question.entity";
import { QuestionsService } from "./services/questions.service";
import { TemplatesGateway } from "./templates.gateway";

@Module({
    imports: [
        TypeOrmModule.forFeature([Template, Question]),
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
    providers: [TemplatesGateway, TemplatesService, QuestionsService],
})
export class TemplatesModule {}
