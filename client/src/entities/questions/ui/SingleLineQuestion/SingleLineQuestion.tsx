import { TextInput } from "@/shared/ui";
import { ISingleLineQuestionProps } from "./types";
import { useSingleLineQuestion } from "./useSingleLineQuestion";
import { answerPlaceholder } from "./constants";

export function SingleLineQuestion({ question, questionEditor }: ISingleLineQuestionProps) {
    const { handleAnswerChange } = useSingleLineQuestion(question, questionEditor);

    return (
        <>
            <div className="w-[600px]">
                <TextInput
                    placeholder={answerPlaceholder}
                    disabled={!questionEditor.answerEditable}
                    value={question.line}
                    onChange={handleAnswerChange}
                />
            </div>
        </>
    );
}
