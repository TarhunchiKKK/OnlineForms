import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Form } from "./entities/form.entity";
import { Answer } from "./entities/answer.entity";
import { FormsController } from "./forms.controller";
import { AnswersService } from "./services/answers.service";
import { FormsService } from "./services/forms.service";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { FormsGateway } from "./forms.gateway";

@Module({
    imports: [
        TypeOrmModule.forFeature([Form, Answer]),
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
    controllers: [FormsController],
    providers: [FormsGateway, AnswersService, FormsService],
})
export class FormsModule {}
