import { useState } from "react";
import { templatesApi } from "@/entities/templates";
import { TTag } from "@/entities/tags";

export function useTemplates() {
    const [tags, setTags] = useState<TTag[]>([]);

    const { data: templates } = templatesApi.useFindAllQuery(tags.map((tag) => tag.id));

    const handleSelectTag = (newTag: unknown) => {
        const { id: newTagId, title } = newTag as TTag;

        const tagToAdding = {
            id: newTagId,
            title,
        };

        const newTags = tags.find((tag) => tag.id === newTagId)
            ? tags.filter((tag) => tag.id !== newTagId)
            : [...tags, tagToAdding];

        setTags(newTags);
    };

    return {
        templates,
        tags,
        handleSelectTag,
    };
}
