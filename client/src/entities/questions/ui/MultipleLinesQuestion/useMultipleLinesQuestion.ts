import { useDispatch } from "react-redux";
import { TMultipleLineQuestion } from "../../models";
import { questionsSlice } from "../../lib";
import { OmitId } from "../../types";

export function useMultipleLinesQuestion(question: OmitId<TMultipleLineQuestion>) {
    const dispatch = useDispatch();

    const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(
            questionsSlice.actions.upsertQuestion({
                ...question,
                answer: event.target.value,
            } as TMultipleLineQuestion),
        );
    };

    return { handleAnswerChange };
}
