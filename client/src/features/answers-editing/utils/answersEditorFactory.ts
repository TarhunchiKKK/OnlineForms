import { questionsSlice, TQuestion, TQuestionEditorFactory } from "@/entities/questions";
import { useDispatch } from "react-redux";

export const answersEditorFactory: TQuestionEditorFactory = {
    useEditor() {
        const dispatch = useDispatch();

        const updateQuestion = (question: TQuestion) => {
            dispatch(questionsSlice.actions.upsertQuestion(question));
        };

        const createQuestion = () => {};

        const removeQuestion = () => {};

        return {
            headerEditable: false,
            answerEditable: true,
            footerEnabled: false,
            updateQuestion,
            createQuestion,
            removeQuestion,
        };
    },
};
