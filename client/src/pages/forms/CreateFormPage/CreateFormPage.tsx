import { QuestionsList, TemplateHeader } from "@/features/template-editing";
import { Button } from "@/shared/ui";
import { useCreateForm, useEditor } from "./hooks";
import { OperationsOnTheTemplate } from "@/entities/roles";
import { PrivilegentAccess } from "@/features/roles-separation";
import { CommentsList } from "@/widgets/comments";

export function CreateFormPage() {
    const { templateEditor, questions, handleSaveForm } = useCreateForm();

    const { questionsEditor, submitAvailable, userRole } = useEditor();

    return (
        <>
            {templateEditor.template && <TemplateHeader templateEditor={templateEditor} />}

            <QuestionsList questions={questions} questionsEditor={questionsEditor} />

            {submitAvailable && (
                <div className="mx-auto w-min mb-6">
                    <Button content="Save" size="lg" onClick={handleSaveForm} />
                </div>
            )}

            <PrivilegentAccess role={userRole} operation={OperationsOnTheTemplate.CreateComment}>
                <CommentsList />
            </PrivilegentAccess>
        </>
    );
}
