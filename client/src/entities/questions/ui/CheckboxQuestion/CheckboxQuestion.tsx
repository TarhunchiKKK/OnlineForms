import { Checkbox } from "@/shared/ui";
import { ICheckboxQuestionProps } from "./types";
import { useCheckboxQuestion } from "./useCheckboxQuestion";
import { checkedLabel, notCheckedLabel } from "./constants";
import { TemplateEditorContext } from "@/shared/types";

export function CheckboxQuestion({ question, context }: ICheckboxQuestionProps) {
    const isEditing = context === TemplateEditorContext.Edit;

    const { handleCheck } = useCheckboxQuestion(question);

    return (
        <>
            <div>
                <Checkbox
                    label={question.isChecked ? checkedLabel : notCheckedLabel}
                    disabled={isEditing}
                    isChecked={question.isChecked}
                    onCheck={handleCheck}
                />
            </div>
        </>
    );
}
