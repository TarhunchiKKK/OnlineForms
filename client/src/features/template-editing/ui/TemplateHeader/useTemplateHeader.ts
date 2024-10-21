import { tagsApi, TTag } from "@/entities/tags";
import { TemplateTopics, TTemplateEditor } from "@/entities/templates";
import { ChangeEvent } from "react";
import { Descendant } from "slate";

export function useTemplateHeader(templateEditor: TTemplateEditor) {
    const [createTag] = tagsApi.useCreateMutation();

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        templateEditor.update({
            ...templateEditor.template,
            title: e.target.value,
        });
    };

    const handleDescriptionChange = (value: Descendant[]) => {
        templateEditor.update({
            ...templateEditor.template,
            description: value,
        });
    };

    const handleTopicChange = (value: string) => {
        templateEditor.update({
            ...templateEditor.template,
            topic: value as TemplateTopics,
        });
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        templateEditor.update({
            ...templateEditor.template,
            image: e.target.value || null,
        });
    };

    const handleAddTags = async (tag: TTag | null) => {
        if (tag) {
            // tag not already exists
            if (!tag.id) {
                const { data: newTag } = await createTag({
                    title: tag.title,
                });

                if (newTag) {
                    templateEditor.update({
                        ...templateEditor.template,
                        tags: [...templateEditor.template.tags, newTag],
                    });
                }
            }
            // tag already exists
            else {
                const nextTags = templateEditor.template.tags.find((t) => t.id === tag.id)
                    ? templateEditor.template.tags.filter((t) => t.id !== tag.id)
                    : [...templateEditor.template.tags, tag];

                templateEditor.update({
                    ...templateEditor.template,
                    tags: nextTags,
                });
            }
        }
    };

    return {
        handleTitleChange,
        handleDescriptionChange,
        handleTopicChange,
        handleImageChange,
        handleAddTags,
    };
}
