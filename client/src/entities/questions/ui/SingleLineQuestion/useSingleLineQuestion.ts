import { TSingleLineQuestion } from "../../models";
import { ChangeEvent } from "react";
import { TQuestionEditor } from "../../types";

export function useSingleLineQuestion(
    question: TSingleLineQuestion,
    questionEditor: TQuestionEditor,
) {
    const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
        questionEditor.update({
            ...question,
            line: e.target.value,
        } as TSingleLineQuestion);
    };

    return { handleAnswerChange };
}
