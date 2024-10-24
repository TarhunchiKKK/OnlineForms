import { TextArea } from "@/shared/ui";
import { IMultipleLinesQuestionProps } from "./types";
import { useMultipleLinesQuestion } from "./useMultipleLinesQuestion";
import { useIntl } from "react-intl";

export function MultipleLinesQuestion({ question, questionEditor }: IMultipleLinesQuestionProps) {
    const { handleAnswerChange } = useMultipleLinesQuestion(question, questionEditor);

    const intl = useIntl();

    return (
        <>
            <div className="w-[800px]">
                <TextArea
                    placeholder={intl.formatMessage({ id: "detailed_answer" })}
                    disabled={!questionEditor.answerEditable}
                    value={question.text}
                    onChange={handleAnswerChange}
                />
            </div>
        </>
    );
}
