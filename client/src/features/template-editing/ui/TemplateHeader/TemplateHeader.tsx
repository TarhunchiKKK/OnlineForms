import { FormatableTextarea } from "@/features/text-formatting";
import { Dropdown, QuestionWrapper, TextInput } from "@/shared/ui";
import { ITemplateHeaderProps } from "./types";

export function TemplateHeader({ data, handlers, dropdownOptions }: ITemplateHeaderProps) {
    return (
        <QuestionWrapper>
            <div className="mb-6 w-[600px]">
                <TextInput
                    placeholder="Template title"
                    value={data.title}
                    onChange={handlers.handleTitleChange}
                />
            </div>

            <div className="mb-6 w-[800px]">
                <FormatableTextarea
                    value={data.description}
                    onChange={handlers.handleDescriptionChange}
                />
            </div>

            <div className="shadow-sm w-[240px]">
                <Dropdown
                    value={data.topic}
                    onSelect={handlers.handleTopicChange}
                    options={dropdownOptions}
                />
            </div>
        </QuestionWrapper>
    );
}
