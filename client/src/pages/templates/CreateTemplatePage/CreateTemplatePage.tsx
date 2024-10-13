import { TemplateEditor } from "@/widgets/templates";
import { useCreateTemplate } from "./useCreateTemplate";

export function CreateTemplatePage() {
    const { template, questions, handleSaveTemplate } = useCreateTemplate();

    return (
        <TemplateEditor
            template={template}
            questions={questions}
            handleSubmit={handleSaveTemplate}
        />
    );
}
