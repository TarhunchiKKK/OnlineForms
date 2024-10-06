import { NumericInput } from "@/shared/ui";
import { QuestionHeader } from "../QuestionHeader";
import { IPositiveIntegerQuestionProps } from "./types";
import { usePositiveIntegerQuestion } from "./usePositiveIntegerQuestion";
import { maxValue, minValue, step } from "./constants";

export function PositiveIntegerQuestion({ question }: IPositiveIntegerQuestionProps) {
    const { handleValueChange } = usePositiveIntegerQuestion(question);

    return (
        <>
            <div>
                <QuestionHeader question={question} />
            </div>

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
