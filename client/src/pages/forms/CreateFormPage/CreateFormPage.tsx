import { answersCreatingEditorFactory } from "@/features/forms-creating";
import { useCreateForm } from "./useCreateForm";
import { QuestionsList, TemplateHeader } from "@/features/template-editing";
import { Button } from "@/shared/ui";

export function CreateFormPage() {
    const { template, questions, handleSaveForm } = useCreateForm();

    const questionsEditor = answersCreatingEditorFactory.useEditor();

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
