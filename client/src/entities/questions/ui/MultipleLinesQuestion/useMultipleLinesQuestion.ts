import { TMultipleLineQuestion } from "../../models";
import { TQuestionEditor } from "../../utils";

export function useMultipleLinesQuestion(
    question: TMultipleLineQuestion,
    questionEditor: TQuestionEditor,
) {
    const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        questionEditor.updateQuestion({
            ...question,
            text: event.target.value,
        } as TMultipleLineQuestion);
    };

    return { handleAnswerChange };
}
