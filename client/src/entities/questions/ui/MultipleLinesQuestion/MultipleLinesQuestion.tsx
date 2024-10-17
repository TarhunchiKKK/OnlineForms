import { TextArea } from "@/shared/ui";
import { IMultipleLinesQuestionProps } from "./types";
import { useMultipleLinesQuestion } from "./useMultipleLinesQuestion";
import { answerPlaceholder } from "./constants";

export function MultipleLinesQuestion({ question, questionEditor }: IMultipleLinesQuestionProps) {
    const { handleAnswerChange } = useMultipleLinesQuestion(question, questionEditor);

    return (
        <>
            <div className="w-[800px]">
                <TextArea
                    placeholder={answerPlaceholder}
                    disabled={!questionEditor.answerEditable}
                    value={question.text}
                    onChange={handleAnswerChange}
                />
            </div>
        </>
    );
}
