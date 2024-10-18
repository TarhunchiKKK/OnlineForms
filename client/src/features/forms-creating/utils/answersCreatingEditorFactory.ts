import { useDispatch } from "react-redux";
import { questionsSlice, TQuestion, TQuestionEditorFactory } from "@/entities/questions";

export const answersCreatingEditorFactory: TQuestionEditorFactory = {
    useEditor() {
        const dispatch = useDispatch();

        const update = (question: TQuestion) => {
            dispatch(questionsSlice.actions.upsertQuestion(question));
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
