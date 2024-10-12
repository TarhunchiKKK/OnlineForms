import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/shared/hooks";
import { questionsSlice } from "@/entities/questions";
import { defaultQuestion } from "./constants";
import { getNextSequenceNumber } from "./helpers";

export function useQuestions() {
    const dispatch = useDispatch();

    const questionsRecord = useAppSelector((state) => state.questions.entities);

    const questions = useMemo(() => Object.values(questionsRecord), [questionsRecord]);

    const handleAddQuestion = () => {
        const nextSequenceNumber = getNextSequenceNumber(questionsRecord);

        dispatch(
            questionsSlice.actions.addQuestion({
                ...defaultQuestion,
                sequenceNumber: nextSequenceNumber,
            }),
        );
    };

    return {
        questions,
        handleAddQuestion,
    };
}
