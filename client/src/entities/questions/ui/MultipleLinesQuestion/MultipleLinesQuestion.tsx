import { TextArea } from "@/shared/ui";
import { IMultipleLinesQuestionProps } from "./types";
import { useMultipleLinesQuestion } from "./useMultipleLinesQuestion";
import { answerPlaceholder } from "./constants";
import { TemplateEditorContext } from "@/shared/types";

export function MultipleLinesQuestion({ question, context }: IMultipleLinesQuestionProps) {
    const isEditing = context === TemplateEditorContext.Edit;

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
