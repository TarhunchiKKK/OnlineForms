import { useDispatch } from "react-redux";
import { QuestionTypes, TQuestion } from "../../../entities/questions/models/questions";
import { questionsSlice } from "../../../entities/questions/lib";
import { QuestionsWsApiProvider } from "../../../entities/questions/api";
import { TCreateQuestionDto } from "../../../entities/questions/models";
import { useQuestions } from "../hooks";
import { defaultQuestions, TQuestionEditorFactory } from "@/entities/questions";

export const questionEditorFactory: TQuestionEditorFactory = {
    useEditor() {
        const dispatch = useDispatch();
        const { nextSequenceNumber } = useQuestions();

        const questionsWsApi = QuestionsWsApiProvider.getInstance();

        questionsWsApi.onCreateQuestion((question) => {
            dispatch(questionsSlice.actions.upsertQuestion(question));
        });

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
    },
};
