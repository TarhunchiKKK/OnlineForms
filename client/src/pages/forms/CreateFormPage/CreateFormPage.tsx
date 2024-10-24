import { LikeTemplateButton, TemplateHeader } from "@/features/template-editing";
import { Button } from "@/shared/ui";
import { useCreateForm, useEditor } from "./hooks";
import { OperationsOnTheTemplate } from "@/entities/roles";
import { PrivilegentAccess } from "@/features/roles-separation";
import { CommentsList } from "@/widgets/comments";
import { QuestionsList } from "@/widgets/questions";
import { useIntl } from "react-intl";

export function CreateFormPage() {
    const { templateEditor, questions, handleSaveForm } = useCreateForm();

    const { questionsEditor, submitAvailable, userRole } = useEditor();

    const intl = useIntl();

    return (
        <>
            {templateEditor.template && <TemplateHeader templateEditor={templateEditor} />}

            <QuestionsList questions={questions} questionsEditor={questionsEditor} />

            {submitAvailable && (
                <div className="mx-auto w-min mb-6">
                    <Button
                        content={intl.formatMessage({ id: "save" })}
                        size="lg"
                        onClick={handleSaveForm}
                    />
                </div>
            )}

            <div className="fixed top-4 right-4 flex flex-row justify-start items-center gap-4 w-min">
                <PrivilegentAccess role={userRole} operation={OperationsOnTheTemplate.LikeTemplate}>
                    <LikeTemplateButton />
                </PrivilegentAccess>
            </div>

            <PrivilegentAccess role={userRole} operation={OperationsOnTheTemplate.CreateComment}>
                <CommentsList />
            </PrivilegentAccess>
        </>
    );
}
