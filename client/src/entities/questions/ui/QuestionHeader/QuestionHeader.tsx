import { Dropdown, TextInput } from "@/shared/ui";
import { IQuestionHeaderProps } from "./types";
import { defaultTitlePlaceholder, questionTypesDropdownOptions } from "./constants";
import { useQuestionHeader } from "./useQuestionHeader";
import { TemplateEditorContext } from "@/shared/types";

export function QuestionHeader({ question, questionEditor, context }: IQuestionHeaderProps) {
    const isAnswering = context === TemplateEditorContext.Answer;

    const { handleTitleChange, handleTypeChange } = useQuestionHeader(question, questionEditor);

    return (
        <div className="flex flex-row justify-between items-center mb-4">
            <div className="shadow-sm">
                <TextInput
                    placeholder={defaultTitlePlaceholder}
                    value={question.title}
                    disabled={isAnswering}
                    onChange={handleTitleChange}
                />
            </div>

            <div className="shadow-sm w-[240px]">
                <Dropdown
                    value={question.type}
                    disabled={isAnswering}
                    onSelect={handleTypeChange}
                    options={questionTypesDropdownOptions}
                />
            </div>
        </div>
    );
}
