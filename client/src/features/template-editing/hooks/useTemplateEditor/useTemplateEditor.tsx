import { TemplatesWsApiProvider, TTemplate, TTemplateEditor } from "@/entities/templates";
import { useState, useEffect } from "react";

export function useTemplateEditor(inputTemplate?: TTemplate): TTemplateEditor {
    const [template, setTemplate] = useState(inputTemplate);

    useEffect(() => {
        setTemplate(inputTemplate);
    }, [inputTemplate]);

    const templatesWsApi = TemplatesWsApiProvider.getInstance();

    const update = (updates: TTemplate) => {
        const newValue = {
            ...template,
            ...updates,
        };

        setTemplate(newValue);

        templatesWsApi.updateTemplate({
            data: newValue,
        });
    };

    return {
        template: template as TTemplate,
        update,
        editable: true,
    };
}
