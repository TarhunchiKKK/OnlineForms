import { ChangeEvent, useEffect, useState } from "react";
import { Descendant } from "slate";
import { TemplatesWsApiProvider, TemplateTopics, TTemplate } from "@/entities/templates";

export function useTemplate(inputTemplate?: TTemplate) {
    const [template, setTemplate] = useState(inputTemplate);

    useEffect(() => {
        setTemplate(inputTemplate);
    }, [inputTemplate]);

    const templatesWsApi = TemplatesWsApiProvider.getInstance();

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = {
            ...(template as TTemplate),
            title: e.target.value,
        };

        setTemplate(newValue);

        templatesWsApi.updateTemplate({
            data: newValue,
        });
    };

    const handleDescriptionChange = (value: Descendant[]) => {
        const newValue = {
            ...(template as TTemplate),
            description: value,
        };

        setTemplate(newValue);

        templatesWsApi.updateTemplate({
            data: newValue,
        });
    };

    const handleTopicChange = (value: string) => {
        const newValue = {
            ...(template as TTemplate),
            topic: value as TemplateTopics,
        };

        setTemplate(newValue);

        templatesWsApi.updateTemplate({
            data: newValue,
        });
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = {
            ...(template as TTemplate),
            image: e.target.value || null,
        };

        setTemplate(newValue);

        templatesWsApi.updateTemplate({
            data: newValue,
        });
    };

    return {
        template: {
            ...template,
            image: template?.image || "",
        },
        handlers: {
            handleTitleChange,
            handleDescriptionChange,
            handleTopicChange,
            handleImageChange,
        },
    };
}
