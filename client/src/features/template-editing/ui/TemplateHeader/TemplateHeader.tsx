import { FormatableTextarea } from "@/features/text-formatting";
import { Dropdown, ImageInput, QuestionWrapper, TextInput } from "@/shared/ui";
import { TTemplateHeaderProps } from "./types";
import { templateTopicDropdownOptions } from "./constants";
import { useTemplateHeader } from "./useTemplateHeader";
import { TagsAutocomplete } from "@/widgets/tags";
import { useIntl } from "react-intl";

export function TemplateHeader({ templateEditor }: TTemplateHeaderProps) {
    const {
        handleTitleChange,
        handleDescriptionChange,
        handleTopicChange,
        handleImageChange,
        handleAddTags,
    } = useTemplateHeader(templateEditor);

    const intl = useIntl();

    return (
        <QuestionWrapper>
            <div className="mb-6 w-[600px]">
                <TextInput
                    placeholder={intl.formatMessage({ id: "template_title" })}
                    value={templateEditor.template.title}
                    onChange={handleTitleChange}
                    disabled={!templateEditor.editable}
                />
            </div>

            <div className="mb-6 w-[800px]">
                <FormatableTextarea
                    value={templateEditor.template.description}
                    onChange={handleDescriptionChange}
                    disabled={!templateEditor.editable}
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
                    placeholder={intl.formatMessage({ id: "enter_image_url" })}
                    onChange={handleImageChange}
                    disabled={!templateEditor.editable}
                />
            </div>

            <div className="w-1/2">
                <TagsAutocomplete
                    selectedTags={templateEditor.template.tags}
                    handleAddTag={handleAddTags}
                    disabled={!templateEditor.editable}
                />
            </div>
        </QuestionWrapper>
    );
}
