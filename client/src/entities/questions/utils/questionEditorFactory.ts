import { useDispatch } from "react-redux";
import { TQuestion } from "../models/questions";
import { questionsSlice } from "../lib";
import { QuestionsWsApi } from "../api";
import { useQuestions } from "@/features/template-editing";
import { defaultQuestion } from "../constants";
import { TQuestionEditorFactory } from "./types";
import { TCreateQuestionDto } from "../models";
import { useMemo } from "react";

export const questionEditorFactory: TQuestionEditorFactory = {
    useEditor() {
        const dispatch = useDispatch();
        const { nextSequenceNumber } = useQuestions();

        const questionsWsApi = useMemo(() => new QuestionsWsApi(), []);

        questionsWsApi.onCreateQuestion((question) => {
            dispatch(questionsSlice.actions.upsertQuestion(question));
        });

        const updateQuestion = (question: TQuestion) => {
            dispatch(questionsSlice.actions.upsertQuestion(question));
            questionsWsApi.updateQuestion(question);
        };

        const removeQuestion = (question: TQuestion) => {
            dispatch(questionsSlice.actions.deleteQuestion(question.sequenceNumber));
            questionsWsApi.removeQuestion(question.id);
        };

        const createQuestion = (templateId: string) => {
            const question: TCreateQuestionDto = {
                ...defaultQuestion,
                sequenceNumber: nextSequenceNumber,
                template: {
                    id: templateId,
                },
            };

            dispatch(questionsSlice.actions.addQuestion(question));
            questionsWsApi.createQuestion(question);
        };

        return {
            updateQuestion,
            removeQuestion,
            createQuestion,
        };
    },
};
