import { Dropdown, TextInput } from "@/shared/ui";
import { IQuestionHeaderProps } from "./types";
import { defaultTitlePlaceholder, questionTypesDropdownOptions } from "./constants";
import { useQuestionHeader } from "./useQuestionHeader";

export function QuestionHeader({ question, questionEditor }: IQuestionHeaderProps) {
    const { handleTitleChange, handleTypeChange } = useQuestionHeader(question, questionEditor);

    return (
        <div className="flex flex-row justify-between items-center mb-4">
            <div className="shadow-sm">
                <TextInput
                    placeholder={defaultTitlePlaceholder}
                    value={question.title}
                    disabled={!questionEditor.headerEditable}
                    onChange={handleTitleChange}
                />
            </div>

            <div className="shadow-sm w-[240px]">
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
