import { AddQuestionButton, QuestionsList, TemplateHeader } from "@/features/template-editing";
import { useEditTemplate } from "./useEditTemplate";
import { useQuestionsEditor } from "@/features/questions-editing";

export function EditTemplatePage() {
    const { template, questions } = useEditTemplate();

    const questionsEditor = useQuestionsEditor();

    const handleCreateQuestion = () => {
        questionsEditor.create(template.template!.id);
    };

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

            <AddQuestionButton createQuestion={handleCreateQuestion} />
        </>
    );
}
