import { NumericInput } from "@/shared/ui";
import { IPositiveIntegerQuestionProps } from "./types";
import { usePositiveIntegerQuestion } from "./usePositiveIntegerQuestion";
import { maxValue, minValue, step } from "./constants";

export function PositiveIntegerQuestion({
    question,
    questionEditor,
}: IPositiveIntegerQuestionProps) {
    const { handleValueChange } = usePositiveIntegerQuestion(question, questionEditor);

    return (
        <>
            <div className="w-[100px]">
                <NumericInput
                    disabled={!questionEditor.answerEditable}
                    min={minValue}
                    max={maxValue}
                    step={step}
                    defaultValue={0}
                    value={question.value}
                    onChange={handleValueChange}
                />
            </div>
        </>
    );
}
