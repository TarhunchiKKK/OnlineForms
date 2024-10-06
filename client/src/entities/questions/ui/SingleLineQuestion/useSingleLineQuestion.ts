import { useDispatch } from "react-redux";
import { TSingleLineQuestion } from "../../models";
import { ChangeEvent } from "react";
import { questionsSlice } from "../../lib";
import { OmitId } from "../../types";

export function useSingleLineQuestion(question: OmitId<TSingleLineQuestion>) {
    const dispatch = useDispatch();

    const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            questionsSlice.actions.upsertQuestion({
                // id: questionSequenceNumber,
                // changes: {
                //     answer: e.target.value,
                // },
                ...question,
                answer: e.target.value,
            } as TSingleLineQuestion),
        );
    };

    return { handleAnswerChange };
}
