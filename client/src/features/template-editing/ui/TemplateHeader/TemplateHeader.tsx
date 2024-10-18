import { FormatableTextarea } from "@/features/text-formatting";
import { Dropdown, QuestionWrapper, TextInput } from "@/shared/ui";
import { TTemplateHeaderProps } from "./types";
import { templateTopicDropdownOptions } from "./constants";

export function TemplateHeader({ template, handlers, editable }: TTemplateHeaderProps) {
    return (
        <QuestionWrapper>
            <div className="mb-6 w-[600px]">
                <TextInput
                    placeholder="Template title"
                    value={template.title}
                    onChange={handlers?.handleTitleChange}
                    disabled={!editable}
                />
            </div>

            <div className="mb-6 w-[800px]">
                <FormatableTextarea
                    value={template.description}
                    onChange={handlers.handleDescriptionChange}
                />
            </div>

            <div className="shadow-sm w-[240px]">
                <Dropdown
                    value={template.topic}
                    onSelect={handlers.handleTopicChange}
                    options={templateTopicDropdownOptions}
                    disabled={!editable}
                />
            </div>
        </QuestionWrapper>
    );
}
