import { TextArea } from "@/shared/ui";
import { IMultipleLinesQuestionProps } from "./types";
import { useMultipleLinesQuestion } from "./useMultipleLinesQuestion";
import { answerPlaceholder } from "./constants";
import { QuestionContexts } from "../../types";

export function MultipleLinesQuestion({ question, context }: IMultipleLinesQuestionProps) {
    const isEditing = context === QuestionContexts.Edit;

    const { handleAnswerChange } = useMultipleLinesQuestion(question);

    return (
        <>
            <div className="w-[800px]">
                <TextArea
                    placeholder={answerPlaceholder}
                    disabled={isEditing}
                    value={question.text}
                    onChange={handleAnswerChange}
                />
            </div>
        </>
    );
}
