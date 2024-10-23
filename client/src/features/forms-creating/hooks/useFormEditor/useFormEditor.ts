import { useDispatch } from "react-redux";
import { questionsSlice, TQuestion, TQuestionEditor } from "@/entities/questions";

export function useFormEditor(): TQuestionEditor {
    const dispatch = useDispatch();

    const update = (question: TQuestion) => {
        dispatch(questionsSlice.actions.upsertQuestion(question));
    };

    return {
        headerEditable: false,
        answerEditable: true,
        footerEnabled: false,
        update,
        create: () => {},
        remove: () => {},
    };
}
