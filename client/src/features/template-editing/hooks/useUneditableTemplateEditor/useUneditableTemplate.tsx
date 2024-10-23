import { TTemplate, TTemplateEditor } from "@/entities/templates";
import { useState, useEffect } from "react";

export function useUneditableTemplate(inputTemplate?: TTemplate): TTemplateEditor {
    const [template, setTemplate] = useState(inputTemplate);

    useEffect(() => {
        setTemplate(inputTemplate);
    }, [inputTemplate]);

    const update = () => {};

    return {
        template: template as TTemplate,
        update,
        editable: false,
    };
}
