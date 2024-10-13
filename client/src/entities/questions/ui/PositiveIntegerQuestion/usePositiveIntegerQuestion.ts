import { useDispatch } from "react-redux";
import { TPositiveIntegerQuestion } from "../../models";
import { OmitId } from "../../types";
import { ChangeEvent } from "react";
import { questionsSlice } from "../../lib";

export function usePositiveIntegerQuestion(question: OmitId<TPositiveIntegerQuestion>) {
    const dispatch = useDispatch();

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            questionsSlice.actions.upsertQuestion({
                ...question,
                value: +e.target.value,
            } as TPositiveIntegerQuestion),
        );
    };

    return { handleValueChange };
}
