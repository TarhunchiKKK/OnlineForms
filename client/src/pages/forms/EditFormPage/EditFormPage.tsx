import { QuestionsList, TemplateHeader } from "@/features/template-editing";
import { useEditForm, useFormEditor } from "./hooks";

export function EditFormPage() {
    const { template, questions } = useEditForm();

    const questionsEditor = useFormEditor();

    return (
        <>
            {template.template && (
                <TemplateHeader
                    template={template.template}
                    handlers={template.handlers}
                    editable={template.editable}
                />
            )}

            <QuestionsList questions={questions} questionsEditor={questionsEditor} />
        </>
    );
}
