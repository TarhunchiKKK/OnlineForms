import { Module } from "@nestjs/common";
import { QuestionsService } from "./services/questions.service";
import { QuestionsController } from "./questions.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Question } from "./entities/question.entity";
import { Answer } from "./entities/answer.entity";
import { AnswersService } from "./services/answers.service";

@Module({
    imports: [TypeOrmModule.forFeature([Question, Answer])],
    controllers: [QuestionsController],
    providers: [QuestionsService, AnswersService],
    exports: [QuestionsService, AnswersService],
})
export class QuestionsModule {}
