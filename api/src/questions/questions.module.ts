import { Module } from "@nestjs/common";
import { QuestionsService } from "./questions.service";
import { QuestionsController } from "./questions.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Question } from "./entities/question.entity";
import { SingleLineQuestion } from "./entities/single-line-question.entity";
import { MultipleLinesQuestion } from "./entities/multiple-lines-question.entity";
import { CheckboxQuestion } from "./entities/checkbox-question.entity";
import { PositiveIntegerQuestion } from "./entities/positive-integer-question";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Question,
            SingleLineQuestion,
            MultipleLinesQuestion,
            CheckboxQuestion,
            PositiveIntegerQuestion,
        ]),
    ],
    controllers: [QuestionsController],
    providers: [QuestionsService],
    exports: [QuestionsService],
})
export class QuestionsModule {}
