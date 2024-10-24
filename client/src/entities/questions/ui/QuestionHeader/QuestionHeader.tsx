import { Dropdown, TextInput } from "@/shared/ui";
import { IQuestionHeaderProps } from "./types";
import { questionTypesDropdownOptions } from "./constants";
import { useQuestionHeader } from "./useQuestionHeader";
import { useIntl } from "react-intl";

export function QuestionHeader({ question, questionEditor }: IQuestionHeaderProps) {
    const { handleTitleChange, handleTypeChange } = useQuestionHeader(question, questionEditor);

    const intl = useIntl();

    return (
        <div className="flex flex-row justify-between items-center mb-4">
            <div className="w-[280px]">
                <TextInput
                    placeholder={intl.formatMessage({ id: "question_title_placeholder" })}
                    value={question.title}
                    disabled={!questionEditor.headerEditable}
                    onChange={handleTitleChange}
                />
            </div>

            <div className="w-[240px]">
                <Dropdown
                    value={question.type}
                    disabled={!questionEditor.headerEditable}
                    onSelect={handleTypeChange}
                    options={questionTypesDropdownOptions}
                />
            </div>
        </div>
    );
}
