import { TemplateTopics, TTemplateEditor } from "@/entities/templates";
import { ChangeEvent } from "react";
import { Descendant } from "slate";

export function useTemplateHeader(templateEditor: TTemplateEditor) {
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

    return {
        handleTitleChange,
        handleDescriptionChange,
        handleTopicChange,
        handleImageChange,
    };
}
