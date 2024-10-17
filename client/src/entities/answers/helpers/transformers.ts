import {
    QuestionTypes,
    TAnyQuestion,
    TCheckboxQuestion,
    TMultipleLineQuestion,
    TPositiveIntegerQuestion,
    TSingleLineQuestion,
} from "@/entities/questions";
import { TCreateAnyAnswerDto } from "../models";

function transformQuestionToCreateAnswerDto(question: TAnyQuestion): TCreateAnyAnswerDto {
    switch (question.type) {
        case QuestionTypes.SingleLine:
            return {
                question,
                line: (question as TSingleLineQuestion).line,
            };

        case QuestionTypes.MultipleLines:
            return {
                question,
                text: (question as TMultipleLineQuestion).text,
            };
        case QuestionTypes.Checkbox:
            return {
                question,
                isChecked: (question as TCheckboxQuestion).isChecked,
            };
        case QuestionTypes.PositiveInteger:
            return {
                question,
                value: (question as TPositiveIntegerQuestion).value,
            };
    }
}

export function transformQuestionsToCreateAnswerDtos(
    questions: TAnyQuestion[],
): TCreateAnyAnswerDto[] {
    return questions.map(transformQuestionToCreateAnswerDto);
}
