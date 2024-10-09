import { Checkbox } from "@/shared/ui";
import { ICheckboxQuestionProps } from "./types";
import { useCheckboxQuestion } from "./useCheckboxQuestion";
import { checkedLabel, notCheckedLabel } from "./constants";

export function CheckboxQuestion({ question }: ICheckboxQuestionProps) {
    const { handleCheck } = useCheckboxQuestion(question);

    return (
        <>
            <div>
                <Checkbox
                    label={question.isChecked ? checkedLabel : notCheckedLabel}
                    isChecked={question.isChecked}
                    onCheck={handleCheck}
                />
            </div>
        </>
    );
}
