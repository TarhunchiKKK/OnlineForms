import { Checkbox } from "@/shared/ui";
import { ICheckboxQuestionProps } from "./types";
import { useCheckboxQuestion } from "./useCheckboxQuestion";
import { useIntl } from "react-intl";

export function CheckboxQuestion({ question, questionEditor }: ICheckboxQuestionProps) {
    const { handleCheck } = useCheckboxQuestion(question, questionEditor);

    const intl = useIntl();

    const selectedLabel = intl.formatMessage({ id: "selected" });
    const notSelectedLabel = intl.formatMessage({ id: "not_selected" });

    return (
        <>
            <div>
                <Checkbox
                    label={question.isChecked ? selectedLabel : notSelectedLabel}
                    disabled={!questionEditor.answerEditable}
                    isChecked={question.isChecked}
                    onCheck={handleCheck}
                />
            </div>
        </>
    );
}
