import { QuestionsList, TemplateHeader } from "@/features/template-editing";
import { useEditTemplate } from "./useEditTemplate";
import { templateEditorContext } from "./constants";

export function EditTemplatePage() {
    const { template, questions } = useEditTemplate();

    return (
        <>
            <TemplateHeader {...template} />

            <QuestionsList questions={questions} context={templateEditorContext} />
        </>
    );
}
