import { TCreateAnyAnswerDto } from "@/entities/answers";
import { TQuestion } from "@/entities/questions";
import { parseQuestionToCreateAnswerDto, parseQuestionToUpdateAnswerDto } from "./helpers";
import { TUpdateAnswerDto } from "@/entities/answers/models/dtos";

export class QuestionsToAnswersAdapter {
    public static toCreateAnswerDtos(questions: TQuestion[]): TCreateAnyAnswerDto[] {
        return questions.map(parseQuestionToCreateAnswerDto);
    }

    public static toUpdateAnswerDto(question: TQuestion): TUpdateAnswerDto {
        return parseQuestionToUpdateAnswerDto(question);
    }
}
