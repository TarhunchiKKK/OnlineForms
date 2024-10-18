import { Checkbox } from "@/shared/ui";
import { ICheckboxQuestionProps } from "./types";
import { useCheckboxQuestion } from "./useCheckboxQuestion";
import { checkedLabel, notCheckedLabel } from "./constants";

export function CheckboxQuestion({ question, questionEditor }: ICheckboxQuestionProps) {
    const { handleCheck } = useCheckboxQuestion(question, questionEditor);

    return (
        <>
            <div>
                <Checkbox
                    label={question.isChecked ? checkedLabel : notCheckedLabel}
                    disabled={!questionEditor.answerEditable}
                    isChecked={question.isChecked}
                    onCheck={handleCheck}
                />
            </div>
        </>
    );
}
