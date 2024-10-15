import { ChangeEvent } from "react";
import { defaultQuestions } from "./constants";
import { QuestionTypes, TQuestion } from "../../models";
import { TQuestionEditor } from "../../utils";

export function useQuestionHeader(question: TQuestion, questionEditor: TQuestionEditor) {
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        questionEditor.updateQuestion({
            ...question,
            title: e.target.value,
        });
    };

    const handleTypeChange = (type: string) => {
        const questionType = type as QuestionTypes;

        questionEditor.updateQuestion({
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
