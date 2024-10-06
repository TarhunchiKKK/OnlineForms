import { TextInput } from "@/shared/ui";
import { QuestionHeader } from "../QuestionHeader";
import { ISingleLineQuestionProps } from "./types";
import { useSingleLineQuestion } from "./useSingleLineQuestion";
import { answerPlaceholder } from "./constants";

export function SingleLineQuestion({ question }: ISingleLineQuestionProps) {
    const { handleAnswerChange } = useSingleLineQuestion(question);

    return (
        <>
            <div>
                <QuestionHeader question={question} />
            </div>

            <div className="w-[400px]">
                <TextInput
                    placeholder={answerPlaceholder}
                    value={question.answer}
                    onChange={handleAnswerChange}
                />
            </div>
        </>
    );
}
