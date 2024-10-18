import {
    QuestionTypes,
    TAnyQuestion,
    TCheckboxQuestion,
    TMultipleLineQuestion,
    TPositiveIntegerQuestion,
    TSingleLineQuestion,
} from "@/entities/questions";
import { TAnswer, TCreateAnyAnswerDto } from "../models";

function transformQuestionToCreateAnswerDto(question: TAnyQuestion): TCreateAnyAnswerDto {
    const questionData = {
        id: question.id,
        sequenceNumber: question.sequenceNumber,
        type: question.type,
        title: question.title,
    };
    switch (question.type) {
        case QuestionTypes.SingleLine:
            return {
                question: questionData,
                line: (question as TSingleLineQuestion).line,
            };

        case QuestionTypes.MultipleLines:
            return {
                question: questionData,
                text: (question as TMultipleLineQuestion).text,
            };
        case QuestionTypes.Checkbox:
            return {
                question: questionData,
                isChecked: (question as TCheckboxQuestion).isChecked,
            };
        case QuestionTypes.PositiveInteger:
            return {
                question: questionData,
                value: (question as TPositiveIntegerQuestion).value,
            };
    }
}

export function transformQuestionsToCreateAnswerDtos(
    questions: TAnyQuestion[],
): TCreateAnyAnswerDto[] {
    return questions.map(transformQuestionToCreateAnswerDto);
}

function transformAnswerToQuestion(answer: TAnswer): TAnyQuestion {
    if (answer.line) {
        return {
            ...answer.question,
            line: answer.line,
        };
    } else if (answer.text) {
        return {
            ...answer.question,
            text: answer.text,
        };
    } else if (answer.isChecked) {
        return {
            ...answer.question,
            isChecked: answer.isChecked,
        };
    } else if (answer.value) {
        return {
            ...answer.question,
            value: answer.value,
        };
    } else {
        return {} as TAnyQuestion;
    }
}

export function transformAnswersToQuestions(answers: TAnswer[]): TAnyQuestion[] {
    return answers.map(transformAnswerToQuestion);
}
