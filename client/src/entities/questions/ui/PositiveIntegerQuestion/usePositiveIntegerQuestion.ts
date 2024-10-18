import { ChangeEvent } from "react";
import { TPositiveIntegerQuestion } from "../../models";
import { TQuestionEditor } from "../../types";

export function usePositiveIntegerQuestion(
    question: TPositiveIntegerQuestion,
    questionEditor: TQuestionEditor,
) {
    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        questionEditor.update({
            ...question,
            value: +e.target.value,
        } as TPositiveIntegerQuestion);
    };

    return { handleValueChange };
}
