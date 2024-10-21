import { QuestionsList, TemplateHeader } from "@/features/template-editing";
import { useEditForm, useFormEditor } from "./hooks";

export function EditFormPage() {
    const { templateEditor, questions } = useEditForm();

    const questionsEditor = useFormEditor();

    return (
        <>
            {templateEditor.template && <TemplateHeader templateEditor={templateEditor} />}

            <QuestionsList questions={questions} questionsEditor={questionsEditor} />
        </>
    );
}
