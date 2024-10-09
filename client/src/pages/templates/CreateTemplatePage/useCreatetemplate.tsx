import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { questionsSlice } from "@/entities/questions";
import { defaultFixedQuestions } from "./constants";
import { useQuestions, useTemplate } from "@/features/template-editing";

export function useCreateTemplate() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(questionsSlice.actions.setQuestions(defaultFixedQuestions));
    }, [dispatch]);

    const { template } = useTemplate();

    const { questions, handleAddQuestion } = useQuestions();

    return {
        template,
        questions,
        handleAddQuestion,
    };
}
