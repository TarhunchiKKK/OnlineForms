import { TextArea } from "@/shared/ui";
import { QuestionHeader } from "../QuestionHeader";
import { IMultipleLinesQuestionProps } from "./types";
import { useMultipleLinesQuestion } from "./useMultipleLinesQuestion";
import { answerPlaceholder } from "./constants";

export function MultipleLinesQuestion({ question }: IMultipleLinesQuestionProps) {
    const { handleAnswerChange } = useMultipleLinesQuestion(question);

    return (
        <>
            <div>
                <QuestionHeader question={question} />
            </div>

            <div className="w-[700px]">
                <TextArea
                    placeholder={answerPlaceholder}
                    value={question.answer}
                    onChange={handleAnswerChange}
                />
            </div>
        </>
    );
}
