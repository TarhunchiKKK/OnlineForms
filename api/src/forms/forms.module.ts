import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Form } from "./entities/form.entity";
import { FormsController } from "./forms.controller";
import { FormsService } from "./forms.service";
import { JwtModule } from "@nestjs/jwt";
import { AnswersModule } from "src/answers/answers.module";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        AnswersModule,
        TypeOrmModule.forFeature([Form]),
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
    providers: [FormsService],
    exports: [FormsService],
})
export class FormsModule {}
