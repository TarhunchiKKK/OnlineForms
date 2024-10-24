import { TemplateHeader } from "@/features/template-editing";
import { useEditTemplate } from "./useEditTemplate";
import { AddQuestionButton, useQuestionsEditor } from "@/features/questions-editing";
import { CommentsList } from "@/widgets/comments";
import { PrivilegentAccess, useUserRoleOnTheTemplate } from "@/features/roles-separation";
import { OperationsOnTheTemplate } from "@/entities/roles";
import { QuestionsList } from "@/widgets/questions";
import { LikeTemplateButton } from "@/features/likes";

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

            <div className="fixed top-4 right-4 flex flex-row justify-start items-center gap-4 w-min">
                <AddQuestionButton createQuestion={handleCreateQuestion} />

                <LikeTemplateButton />
            </div>

            <PrivilegentAccess role={userRole} operation={OperationsOnTheTemplate.CreateComment}>
                <CommentsList />
            </PrivilegentAccess>
        </>
    );
}
