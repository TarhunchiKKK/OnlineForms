import { MdDeleteOutline } from "react-icons/md";
import { IQuestionFooterProps } from "./types";
import { iconsSize } from "./constants";
import { useQuestionsFooter } from "./useQuestionsFooter";
import { Switch } from "@/shared/ui";

export function QuestionFooter({ question, questionEditor }: IQuestionFooterProps) {
    const { handleRemoveQuestion, handleIsDisplayedChange } = useQuestionsFooter(
        question,
        questionEditor,
    );

    return (
        <div className="mt-6 flex flex-row justify-between items-center">
            <Switch
                label={question.isDisplayed ? "Displayed" : "Not displayed"}
                checked={question.isDisplayed}
                onChange={handleIsDisplayedChange}
                disabled={false}
            />

            <button title="Delete" onClick={handleRemoveQuestion}>
                <MdDeleteOutline size={iconsSize} />
            </button>
        </div>
    );
}
