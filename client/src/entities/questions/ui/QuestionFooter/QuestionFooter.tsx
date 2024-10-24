import { MdDeleteOutline } from "react-icons/md";
import { IQuestionFooterProps } from "./types";
import { iconsSize } from "./constants";
import { useQuestionsFooter } from "./useQuestionsFooter";
import { Switch } from "@/shared/ui";
import { useIntl } from "react-intl";

export function QuestionFooter({ question, questionEditor }: IQuestionFooterProps) {
    const { handleRemoveQuestion, handleIsDisplayedChange } = useQuestionsFooter(
        question,
        questionEditor,
    );

    const intl = useIntl();

    return (
        <div className="mt-6 flex flex-row justify-between items-center">
            <Switch
                label={intl.formatMessage({
                    id: question.isDisplayed ? "displayed" : "not_displayed",
                })}
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
