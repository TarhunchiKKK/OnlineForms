import { NumericInput } from "@/shared/ui";
import { IPositiveIntegerQuestionProps } from "./types";
import { usePositiveIntegerQuestion } from "./usePositiveIntegerQuestion";
import { maxValue, minValue, step } from "./constants";
import { QuestionContexts } from "../../types";

export function PositiveIntegerQuestion({ question, context }: IPositiveIntegerQuestionProps) {
    const isEditing = context === QuestionContexts.Edit;

    const { handleValueChange } = usePositiveIntegerQuestion(question);

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
