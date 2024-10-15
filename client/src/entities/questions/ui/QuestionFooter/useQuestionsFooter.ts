import { TQuestion } from "../../models";
import { TQuestionEditor } from "../../types";

export function useQuestionsFooter(question: TQuestion, questionEditor: TQuestionEditor) {
    const handleRemoveQuestion = () => {
        questionEditor.removeQuestion(question);
    };

    return { handleRemoveQuestion };
}
