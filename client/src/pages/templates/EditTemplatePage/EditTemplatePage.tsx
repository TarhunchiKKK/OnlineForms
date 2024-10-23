import { AddQuestionButton, QuestionsList, TemplateHeader } from "@/features/template-editing";
import { useEditTemplate } from "./useEditTemplate";
import { useQuestionsEditor } from "@/features/questions-editing";
import { CommentsList } from "@/widgets/comments";
import { PrivilegentAccess, useUserRoleOnTheTemplate } from "@/features/roles-separation";
import { OperationsOnTheTemplate } from "@/entities/roles";

export function EditTemplatePage() {
    const { userRoleOnTheTemplate: userRole } = useUserRoleOnTheTemplate();

    const { templateEditor, questions } = useEditTemplate();

    const questionsEditor = useQuestionsEditor(templateEditor.template);

    const handleCreateQuestion = () => {
        questionsEditor.create(templateEditor.template!.id);
    };

    return (
        <>
            {templateEditor.template && <TemplateHeader templateEditor={templateEditor} />}

            <QuestionsList questions={questions} questionsEditor={questionsEditor} />

            <AddQuestionButton createQuestion={handleCreateQuestion} />

            <PrivilegentAccess role={userRole} operation={OperationsOnTheTemplate.CreateComment}>
                <CommentsList />
            </PrivilegentAccess>
        </>
    );
}
