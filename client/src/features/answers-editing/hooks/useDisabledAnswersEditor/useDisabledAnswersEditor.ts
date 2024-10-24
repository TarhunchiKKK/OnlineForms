import { questionsSlice, TQuestionEditor } from "@/entities/questions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useDisabledAnswersEditor(): TQuestionEditor {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(questionsSlice.actions.resetQuestions());
        };
    }, [dispatch]);
    return {
        headerEditable: false,
        answerEditable: false,
        footerEnabled: false,
        create: () => {},
        update: () => {},
        remove: () => {},
    };
}
