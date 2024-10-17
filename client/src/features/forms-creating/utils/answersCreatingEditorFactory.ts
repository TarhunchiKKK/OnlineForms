import { useDispatch } from "react-redux";
import { questionsSlice, TQuestion, TQuestionEditorFactory } from "@/entities/questions";

export const answersCreatingEditorFactory: TQuestionEditorFactory = {
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
