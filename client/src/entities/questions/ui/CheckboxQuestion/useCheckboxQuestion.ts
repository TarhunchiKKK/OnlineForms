import { useDispatch } from "react-redux";
import { TCheckboxQuestion } from "../../models";
import { ChangeEvent } from "react";
import { questionsSlice } from "../../lib";
import { TQuestionEditor } from "../../types";

export function useCheckboxQuestion(question: TCheckboxQuestion, questionEditor: TQuestionEditor) {
    const dispatch = useDispatch();

    const handleLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        questionEditor.update({
            ...question,
            label: e.target.value,
        } as TCheckboxQuestion);
    };

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            questionsSlice.actions.upsertQuestion({
                ...question,
                isChecked: e.target.checked,
            } as TCheckboxQuestion),
        );
    };

    return { handleLabelChange, handleCheck };
}
