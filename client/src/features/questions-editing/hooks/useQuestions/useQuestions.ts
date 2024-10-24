import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/shared/hooks";
import { questionsSlice, TQuestion } from "@/entities/questions";
import { getNextSequenceNumber } from "./helpers";

export function useQuestions(providedQuestions: TQuestion[] | null, forceReset: boolean) {
    const dispatch = useDispatch();

    const questionsRecord = useAppSelector((state) => state.questions.entities);

    const questions = useMemo(() => Object.values(questionsRecord), [questionsRecord]);

    const nextSequenceNumber = useMemo(
        () => getNextSequenceNumber(questionsRecord),
        [questionsRecord],
    );

    useEffect(() => {
        if (forceReset) {
            dispatch(questionsSlice.actions.resetQuestions());
        }
    }, [dispatch, forceReset]);

    useEffect(() => {
        if (providedQuestions) {
            dispatch(questionsSlice.actions.setQuestions(providedQuestions));
        }
    }, [dispatch, providedQuestions]);

    return {
        questions,
        nextSequenceNumber,
    };
}
