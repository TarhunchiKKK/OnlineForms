import { FormatableTextarea } from "@/features/text-formatting";
import { Dropdown, ImageInput, QuestionWrapper, TextInput } from "@/shared/ui";
import { TTemplateHeaderProps } from "./types";
import { templateTopicDropdownOptions } from "./constants";
import { useTemplateHeader } from "./useTemplateHeader";

export function TemplateHeader({ templateEditor }: TTemplateHeaderProps) {
    const { handleTitleChange, handleDescriptionChange, handleTopicChange, handleImageChange } =
        useTemplateHeader(templateEditor);

    console.log(templateEditor.editable);

    return (
        <QuestionWrapper>
            <div className="mb-6 w-[600px]">
                <TextInput
                    placeholder="Template title"
                    value={templateEditor.template.title}
                    onChange={handleTitleChange}
                    disabled={!templateEditor.editable}
                />
            </div>

            <div className="mb-6 w-[800px]">
                <FormatableTextarea
                    value={templateEditor.template.description}
                    onChange={handleDescriptionChange}
                />
            </div>

            <div className="mb-6 shadow-sm w-[240px]">
                <Dropdown
                    value={templateEditor.template.topic}
                    onSelect={handleTopicChange}
                    options={templateTopicDropdownOptions}
                    disabled={!templateEditor.editable}
                />
            </div>

            <div className="mb-6 w-2/3">
                <ImageInput
                    value={templateEditor.template.image || ""}
                    placeholder="Enter image url"
                    onChange={handleImageChange}
                    disabled={!templateEditor.editable}
                />
            </div>
        </QuestionWrapper>
    );
}
