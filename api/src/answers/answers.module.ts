import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilledTemplate } from "./entities/filled-template.entity";
import { Answer } from "./entities/answer.entity";
import { AnswersController } from "./answers.controller";
import { AnswersService } from "./services/answers.service";
import { FilledTemplatesService } from "./services/filled-templates.service";

@Module({
    imports: [TypeOrmModule.forFeature([FilledTemplate, Answer])],
    controllers: [AnswersController],
    providers: [AnswersService, FilledTemplatesService],
})
export class AnswersModule {}
