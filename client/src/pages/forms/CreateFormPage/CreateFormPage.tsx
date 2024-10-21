import { useFormCreatingEditor } from "@/features/forms-creating";
import { QuestionsList, TemplateHeader } from "@/features/template-editing";
import { Button } from "@/shared/ui";
import { useCreateForm } from "./useCreateForm";

export function CreateFormPage() {
    const { templateEditor, questions, handleSaveForm } = useCreateForm();

    const questionsEditor = useFormCreatingEditor();

    return (
        <>
            {templateEditor.template && <TemplateHeader templateEditor={templateEditor} />}

            <QuestionsList questions={questions} questionsEditor={questionsEditor} />

            <div className="mx-auto w-min mb-6">
                <Button content="Save" size="lg" onClick={handleSaveForm} />
            </div>
        </>
    );
}
