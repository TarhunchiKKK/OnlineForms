import { TextArea } from "@/shared/ui";
import { IMultipleLinesQuestionProps } from "./types";
import { useMultipleLinesQuestion } from "./useMultipleLinesQuestion";
import { answerPlaceholder } from "./constants";

export function MultipleLinesQuestion({ question }: IMultipleLinesQuestionProps) {
    const { handleAnswerChange } = useMultipleLinesQuestion(question);

    return (
        <>
            <div className="w-[800px]">
                <TextArea
                    placeholder={answerPlaceholder}
                    value={question.answer}
                    onChange={handleAnswerChange}
                />
            </div>
        </>
    );
}
