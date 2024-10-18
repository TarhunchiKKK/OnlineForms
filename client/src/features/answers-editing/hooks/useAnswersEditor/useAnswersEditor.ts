import { useDispatch } from "react-redux";
import { AnswersWsApiProvider } from "@/entities/answers";
import { TQuestion, TQuestionEditor, questionsSlice } from "@/entities/questions";
import { QuestionsToAnswersAdapter } from "../../utils";

export function useAnswersEditor(): TQuestionEditor {
    const dispatch = useDispatch();

    const answersWsApi = AnswersWsApiProvider.getInstance();

    const update = (question: TQuestion) => {
        dispatch(questionsSlice.actions.upsertQuestion(question));

        const updateAnswerDto = QuestionsToAnswersAdapter.toUpdateAnswerDto(question);
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
}
