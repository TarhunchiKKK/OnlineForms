import { NumericInput } from "@/shared/ui";
import { IPositiveIntegerQuestionProps } from "./types";
import { usePositiveIntegerQuestion } from "./usePositiveIntegerQuestion";
import { maxValue, minValue, step } from "./constants";

export function PositiveIntegerQuestion({ question }: IPositiveIntegerQuestionProps) {
    const { handleValueChange } = usePositiveIntegerQuestion(question);

    return (
        <>
            <div>
                <NumericInput
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
