import { QuestionsList, TemplateHeader } from "@/features/template-editing";
import { Button } from "@/shared/ui";
import { useCreateForm, useEditor } from "./hooks";

export function CreateFormPage() {
    const { templateEditor, questions, handleSaveForm } = useCreateForm();

    const questionsEditor = useEditor();

    return (
        <>
            {templateEditor.template && <TemplateHeader templateEditor={templateEditor} />}

            <QuestionsList questions={questions} questionsEditor={questionsEditor} />

            {templateEditor.editable && (
                <div className="mx-auto w-min mb-6">
                    <Button content="Save" size="lg" onClick={handleSaveForm} />
                </div>
            )}
        </>
    );
}
