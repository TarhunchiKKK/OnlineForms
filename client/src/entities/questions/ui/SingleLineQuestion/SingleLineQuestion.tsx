import { TextInput } from "@/shared/ui";
import { ISingleLineQuestionProps } from "./types";
import { useSingleLineQuestion } from "./useSingleLineQuestion";
import { answerPlaceholder } from "./constants";
import { QuestionContexts } from "../../types";

export function SingleLineQuestion({ question, context }: ISingleLineQuestionProps) {
    const isEditing = context === QuestionContexts.Edit;

    const { handleAnswerChange } = useSingleLineQuestion(question);

    return (
        <>
            <div className="w-[600px]">
                <TextInput
                    placeholder={answerPlaceholder}
                    disabled={isEditing}
                    value={question.line}
                    onChange={handleAnswerChange}
                />
            </div>
        </>
    );
}
