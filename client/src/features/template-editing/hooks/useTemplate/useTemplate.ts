import { ChangeEvent, useState } from "react";
import { Descendant } from "slate";
import { TemplateTopics } from "@/entities/templates";
import {
    defaultTemplateDescription,
    defaultTemplateTitle,
    defaultTemplateTopic,
} from "./constants";

export function useTemplate() {
    const [title, setTitle] = useState<string>(defaultTemplateTitle);
    const [description, setDescription] = useState<Descendant[]>(defaultTemplateDescription);
    const [topic, setTopic] = useState<TemplateTopics>(defaultTemplateTopic);

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
