import { TCheckboxQuestion } from "../../models";
import { ChangeEvent } from "react";
import { TQuestionEditor } from "../../types";

export function useCheckboxQuestion(question: TCheckboxQuestion, questionEditor: TQuestionEditor) {
    const handleLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        questionEditor.update({
            ...question,
            label: e.target.value,
        } as TCheckboxQuestion);
    };

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        questionEditor.update({
            ...question,
            isChecked: e.target.checked,
        } as TCheckboxQuestion);
    };

    return { handleLabelChange, handleCheck };
}
