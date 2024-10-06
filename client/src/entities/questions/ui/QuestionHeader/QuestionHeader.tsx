import { Dropdown, TextInput } from "@/shared/ui";
import { IQuestionHeaderProps } from "./types";
import { defaultTitlePlaceholder, questionTypesDropdownOptions } from "./constants";
import { useQuestionHeader } from "./useQuestionHeader";

export function QuestionHeader({ question }: IQuestionHeaderProps) {
    const { handleTitleChange, handleTypeChange } = useQuestionHeader(question);

    return (
        <div className="flex flex-row justify-between items-center mb-4">
            <div className="shadow-sm">
                <TextInput
                    placeholder={defaultTitlePlaceholder}
                    value={question.title}
                    onChange={handleTitleChange}
                />
            </div>

            <div className="shadow-sm w-[240px]">
                <Dropdown
                    value={question.type}
                    onSelect={handleTypeChange}
                    options={questionTypesDropdownOptions}
                />
            </div>
        </div>
    );
}
