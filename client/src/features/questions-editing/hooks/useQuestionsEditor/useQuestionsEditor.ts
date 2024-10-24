import { useDispatch } from "react-redux";
import {
    defaultQuestions,
    questionsSlice,
    QuestionsWsApiProvider,
    QuestionTypes,
    TCreateQuestionDto,
    TQuestion,
    TQuestionEditor,
} from "@/entities/questions";
import { useQuestions } from "../useQuestions/useQuestions";
import { TTemplate } from "@/entities/templates";
import { useEffect } from "react";

export function useQuestionsEditor(template?: TTemplate): TQuestionEditor {
    const dispatch = useDispatch();
    const { nextSequenceNumber } = useQuestions();

    const questionsWsApi = QuestionsWsApiProvider.getInstance();

    useEffect(() => {
        if (template) {
            questionsWsApi.onCreateQuestion(template.id, (question) => {
                dispatch(questionsSlice.actions.upsertQuestion(question));
            });
        }
    }, [template, questionsWsApi, dispatch]);

    const update = (question: TQuestion) => {
        dispatch(questionsSlice.actions.upsertQuestion(question));
        questionsWsApi.updateQuestion(question);
    };

    const remove = (question: TQuestion) => {
        dispatch(questionsSlice.actions.deleteQuestion(question.sequenceNumber));
        questionsWsApi.removeQuestion(question.id);
    };

    const create = (templateId: string) => {
        const question: TCreateQuestionDto = {
            ...defaultQuestions[QuestionTypes.SingleLine],
            sequenceNumber: nextSequenceNumber,
            template: {
                id: templateId,
            },
        };

        dispatch(questionsSlice.actions.addQuestion(question));
        questionsWsApi.createQuestion(question);
    };

    return {
        headerEditable: true,
        answerEditable: false,
        footerEnabled: true,
        update,
        remove,
        create,
    };
}
