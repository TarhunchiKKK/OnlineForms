import { TextInput } from "@/shared/ui";
import { ISingleLineQuestionProps } from "./types";
import { useSingleLineQuestion } from "./useSingleLineQuestion";
import { answerPlaceholder } from "./constants";

export function SingleLineQuestion({ question }: ISingleLineQuestionProps) {
    const { handleAnswerChange } = useSingleLineQuestion(question);

    return (
        <>
            <div className="w-[600px]">
                <TextInput
                    placeholder={answerPlaceholder}
                    value={question.answer}
                    onChange={handleAnswerChange}
                />
            </div>
        </>
    );
}
