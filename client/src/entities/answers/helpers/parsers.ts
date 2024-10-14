import {
    QuestionTypes,
    TAnyQuestion,
    TCheckboxQuestion,
    TMultipleLineQuestion,
    TPositiveIntegerQuestion,
    TSingleLineQuestion,
} from "@/entities/questions";
import { TAnyAnswer } from "../models";

export function answerToQuestionParser(answer: TAnyAnswer): TAnyQuestion {
    const questionType = answer.question.type;

    switch (questionType) {
        case QuestionTypes.SingleLine: {
            return {
                ...answer.question,
                line: answer.line,
            } as TSingleLineQuestion;
        }
        case QuestionTypes.MultipleLines: {
            return {
                ...answer.question,
                text: answer.text,
            } as TMultipleLineQuestion;
        }
        case QuestionTypes.Checkbox: {
            return {
                ...answer.question,
                isChecked: answer.isChecked,
            } as TCheckboxQuestion;
        }
        case QuestionTypes.PositiveInteger: {
            return {
                ...answer.question,
                value: answer.value,
            } as TPositiveIntegerQuestion;
        }
    }
}
