import { useDispatch } from "react-redux";
import { TQuestion } from "./questions";
import { questionsSlice } from "../lib";
import { TQuestionEditorFactory } from "../types";

export const questionEditorFactory: TQuestionEditorFactory = {
    useEditor() {
        const dispatch = useDispatch();

        const updateQuestion = (question: TQuestion) => {
            dispatch(questionsSlice.actions.upsertQuestion(question));
        };

        const removeQuestion = (question: TQuestion) => {
            dispatch(questionsSlice.actions.deleteQuestion(question.sequenceNumber));
        };

        return {
            updateQuestion,
            removeQuestion,
        };
    },
};
