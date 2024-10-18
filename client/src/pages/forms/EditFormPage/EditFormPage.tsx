import { QuestionsList, TemplateHeader } from "@/features/template-editing";
import { useEditForm } from "./useEditForm";
import { useAnswersEditor } from "@/features/answers-editing";

export function EditFormPage() {
    const { template, questions } = useEditForm();

    const questionsEditor = useAnswersEditor();

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
