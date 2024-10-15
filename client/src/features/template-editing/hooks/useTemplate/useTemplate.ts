import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Descendant } from "slate";
import { TemplatesWsApi, TemplateTopics, TTemplate } from "@/entities/templates";

export function useTemplate(inputTemplate?: TTemplate) {
    const [template, setTemplate] = useState(inputTemplate);

    useEffect(() => {
        setTemplate(inputTemplate);
    }, [inputTemplate]);

    const templatesWsApi = useMemo(() => new TemplatesWsApi(), []);

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

    return {
        template,
        handlers: {
            handleTitleChange,
            handleDescriptionChange,
            handleTopicChange,
        },
    };
}
