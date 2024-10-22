import { ChangeEvent } from "react";
import { TQuestion } from "../../models";
import { TQuestionEditor } from "../../types";

export function useQuestionsFooter(question: TQuestion, questionEditor: TQuestionEditor) {
    const handleRemoveQuestion = () => {
        questionEditor.remove(question);
    };

    const handleIsDisplayedChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);

        questionEditor.update({
            ...question,
            isDisplayed: e.target.checked,
        });
    };

    return { handleRemoveQuestion, handleIsDisplayedChange };
}
