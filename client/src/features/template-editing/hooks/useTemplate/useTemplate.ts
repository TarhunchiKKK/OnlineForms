import { ChangeEvent, useState } from "react";
import { Descendant } from "slate";
import { TemplateTopics, TTemplate } from "@/entities/templates";
import {
    defaultTemplateDescription,
    defaultTemplateTitle,
    defaultTemplateTopic,
} from "./constants";

export function useTemplate(template: TTemplate | null = null) {
    const [title, setTitle] = useState<string>(template?.title ?? defaultTemplateTitle);

    const [description, setDescription] = useState<Descendant[]>(
        template?.description ?? defaultTemplateDescription,
    );

    const [topic, setTopic] = useState<TemplateTopics>(template?.topic ?? defaultTemplateTopic);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (value: Descendant[]) => {
        setDescription(value);
    };

    const handleTopicChange = (value: string) => {
        setTopic(value as TemplateTopics);
    };

    return {
        title,
        handleTitleChange,
        description,
        handleDescriptionChange,
        topic,
        handleTopicChange,
    };
}
