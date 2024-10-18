import { useFormCreatingEdoitor } from "@/features/forms-creating";
import { QuestionsList, TemplateHeader } from "@/features/template-editing";
import { Button } from "@/shared/ui";
import { useCreateForm } from "./useCreateForm";

export function CreateFormPage() {
    const { template, questions, handleSaveForm } = useCreateForm();

    const questionsEditor = useFormCreatingEdoitor();

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

            <div className="mx-auto w-min mb-6">
                <Button content="Save" size="lg" onClick={handleSaveForm} />
            </div>
        </>
    );
}
