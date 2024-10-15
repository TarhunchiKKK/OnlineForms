import { NumericInput } from "@/shared/ui";
import { IPositiveIntegerQuestionProps } from "./types";
import { usePositiveIntegerQuestion } from "./usePositiveIntegerQuestion";
import { maxValue, minValue, step } from "./constants";
import { TemplateEditorContext } from "@/shared/types";

export function PositiveIntegerQuestion({
    question,
    questionEditor,
    context,
}: IPositiveIntegerQuestionProps) {
    const isEditing = context === TemplateEditorContext.Edit;

    const { handleValueChange } = usePositiveIntegerQuestion(question, questionEditor);

    return (
        <>
            <div className="w-[100px]">
                <NumericInput
                    disabled={isEditing}
                    min={minValue}
                    max={maxValue}
                    step={step}
                    value={question.value}
                    onChange={handleValueChange}
                />
            </div>
        </>
    );
}
