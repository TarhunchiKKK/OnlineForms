import { TextInput } from "@/shared/ui";
import { ISingleLineQuestionProps } from "./types";
import { useSingleLineQuestion } from "./useSingleLineQuestion";
import { useIntl } from "react-intl";

export function SingleLineQuestion({ question, questionEditor }: ISingleLineQuestionProps) {
    const { handleAnswerChange } = useSingleLineQuestion(question, questionEditor);

    const intl = useIntl();

    return (
        <>
            <div className="w-[600px]">
                <TextInput
                    placeholder={intl.formatMessage({ id: "short_answer" })}
                    disabled={!questionEditor.answerEditable}
                    value={question.line}
                    onChange={handleAnswerChange}
                />
            </div>
        </>
    );
}
