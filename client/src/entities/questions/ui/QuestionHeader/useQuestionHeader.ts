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
        questionEditor.update({
            ...defaultQuestions[type as QuestionTypes],
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
