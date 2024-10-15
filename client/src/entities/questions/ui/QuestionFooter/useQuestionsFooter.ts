import { TQuestion } from "../../models";
import { TQuestionEditor } from "../../utils";

export function useQuestionsFooter(question: TQuestion, questionEditor: TQuestionEditor) {
    const handleRemoveQuestion = () => {
        questionEditor.removeQuestion(question);
    };

    return { handleRemoveQuestion };
}
