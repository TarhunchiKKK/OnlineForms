import { TCreateAnyAnswerDto } from "@/entities/answers";
import { TUpdateAnswerDto } from "@/entities/answers/models/dtos";
import {
    QuestionTypes,
    TCheckboxQuestion,
    TMultipleLineQuestion,
    TPositiveIntegerQuestion,
    TQuestion,
    TSingleLineQuestion,
} from "@/entities/questions";

export function parseQuestionToCreateAnswerDto(question: TQuestion): TCreateAnyAnswerDto {
    const questionData = {
        title: question.title,
        sequenceNumber: question.sequenceNumber,
        isDisplayed: question.isDisplayed,
        type: question.type,
    };
    switch (question.type) {
        case QuestionTypes.SingleLine:
            return {
                ...questionData,
                line: (question as TSingleLineQuestion).line,
            };

        case QuestionTypes.MultipleLines:
            return {
                ...questionData,
                text: (question as TMultipleLineQuestion).text,
            };
        case QuestionTypes.Checkbox:
            return {
                ...questionData,
                isChecked: (question as TCheckboxQuestion).isChecked,
            };
        case QuestionTypes.PositiveInteger:
            return {
                ...questionData,
                value: (question as TPositiveIntegerQuestion).value,
            };
    }
}

export function parseQuestionToUpdateAnswerDto(question: TQuestion): TUpdateAnswerDto {
    switch (question.type) {
        case QuestionTypes.SingleLine:
            return {
                id: question.id,
                line: (question as TSingleLineQuestion).line,
                text: null,
                isChecked: null,
                value: null,
            };
        case QuestionTypes.MultipleLines:
            return {
                id: question.id,
                line: null,
                text: (question as TMultipleLineQuestion).text,
                isChecked: null,
                value: null,
            };
        case QuestionTypes.Checkbox:
            return {
                id: question.id,
                line: null,
                text: null,
                isChecked: (question as TCheckboxQuestion).isChecked,
                value: null,
            };
        case QuestionTypes.PositiveInteger:
            return {
                id: question.id,
                line: null,
                text: null,
                isChecked: null,
                value: (question as TPositiveIntegerQuestion).sequenceNumber,
            };
    }
}
