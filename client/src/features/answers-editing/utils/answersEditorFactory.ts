import { AnswersWsApiProvider } from "@/entities/answers";
import { questionsSlice, TQuestion, TQuestionEditorFactory } from "@/entities/questions";
import { useDispatch } from "react-redux";
import { parseQuestionToUpdateAnswerDto } from "../helpers";

export const answersEditorFactory: TQuestionEditorFactory = {
    useEditor() {
        const dispatch = useDispatch();

        const answersWsApi = AnswersWsApiProvider.getInstance();

        const update = (question: TQuestion) => {
            dispatch(questionsSlice.actions.upsertQuestion(question));

            const updateAnswerDto = parseQuestionToUpdateAnswerDto(question);
            answersWsApi.updateAnswer(updateAnswerDto);
        };

        const create = () => {};

        const remove = () => {};

        return {
            headerEditable: false,
            answerEditable: true,
            footerEnabled: false,
            update,
            create,
            remove,
        };
    },
};
