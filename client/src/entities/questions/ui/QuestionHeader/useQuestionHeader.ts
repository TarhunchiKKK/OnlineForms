import { ChangeEvent } from "react";
import { QuestionTypes, TQuestion } from "../../models";
import { TQuestionEditor } from "../../types";
import { defaultQuestions } from "../../constants";

export function useQuestionHeader(question: TQuestion, questionEditor: TQuestionEditor) {
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        questionEditor.update({
            ...question,
            title: e.target.value,
        });
    };

    const handleTypeChange = (type: string) => {
        const questionType = type as QuestionTypes;

        questionEditor.update({
            ...defaultQuestions[questionType],
            title: question.title,
            sequenceNumber: question.sequenceNumber,
            id: question.id,
        });
    };

    return {
        handleTitleChange,
        handleTypeChange,
    };
}
