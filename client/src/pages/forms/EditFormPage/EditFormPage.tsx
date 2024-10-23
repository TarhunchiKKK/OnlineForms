import { QuestionsList, TemplateHeader } from "@/features/template-editing";
import { useEditForm, useFormEditor } from "./hooks";

export function EditFormPage() {
    const { templateEditor, questions } = useEditForm();

    const questionsEditor = useFormEditor();

    return (
        <main className="px-6 py-4">
            <div className="mx-auto container">
                {templateEditor.template && <TemplateHeader templateEditor={templateEditor} />}

                <QuestionsList questions={questions} questionsEditor={questionsEditor} />
            </div>
        </main>
    );
}
