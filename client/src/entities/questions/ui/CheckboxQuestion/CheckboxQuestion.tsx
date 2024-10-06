import { Checkbox } from "@/shared/ui";
import { QuestionHeader } from "../QuestionHeader";
import { ICheckboxQuestionProps } from "./types";
import { useCheckboxQuestion } from "./useCheckboxQuestion";
import { checkedLabel, notCheckedLabel } from "./constants";

export function CheckboxQuestion({ question }: ICheckboxQuestionProps) {
    const { handleCheck } = useCheckboxQuestion(question);

    return (
        <>
            <QuestionHeader question={question} />

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
