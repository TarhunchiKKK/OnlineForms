import { useDispatch } from "react-redux";
import { TCheckboxQuestion } from "../../models";
import { ChangeEvent } from "react";
import { questionsSlice } from "../../lib";
import { TQuestionEditor } from "../../utils";

export function useCheckboxQuestion(question: TCheckboxQuestion, questionEditor: TQuestionEditor) {
    const dispatch = useDispatch();

    const handleLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        questionEditor.updateQuestion({
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
