import { TemplateEditor } from "@/widgets/templates";
import { useEditTemplate } from "./useEditTemplate";

export function EditTemplatePage() {
    const { template, questions, handleSaveTemplate } = useEditTemplate();

    return (
        <TemplateEditor
            template={template}
            questions={questions}
            handleSubmit={handleSaveTemplate}
        />
    );
}
