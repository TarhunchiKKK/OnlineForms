import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "./auth/auth.module";
import { TemplatesModule } from "./templates/templates.module";
import { FormsModule } from "./forms/forms.module";
import { RolesModule } from "./roles/roles.module";
import { QuestionsModule } from "./questions/questions.module";
import { AnswersModule } from "./answers/answers.module";
import { TagsModule } from "./tags/tags.module";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { CommentsModule } from './comments/comments.module';

@Module({
    imports: [
        UsersModule,
        AuthModule,
        TemplatesModule,
        FormsModule,
        ConfigModule.forRoot({
            envFilePath: ".env",
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: "postgres",
                database: configService.get("DB_NAME"),
                host: configService.get("DB_HOST"),
                port: +configService.get("DB_PORT"),
                username: configService.get("DB_USER"),
                password: configService.get("DB_PASSWORD"),
                autoLoadEntities: true,
                synchronize: true,
            }),
        }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                global: true,
                secret: configService.get("JWT_SECRET"),
                signOptions: {
                    expiresIn: configService.get("JWT_EXPIRATION"),
                },
            }),
        }),
        EventEmitterModule.forRoot(),
        RolesModule,
        QuestionsModule,
        AnswersModule,
        TagsModule,
        CommentsModule,
    ],
})
export class AppModule {}
