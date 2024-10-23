import { AddQuestionButton, QuestionsList, TemplateHeader } from "@/features/template-editing";
import { useEditTemplate } from "./useEditTemplate";
import { useQuestionsEditor } from "@/features/questions-editing";

export function EditTemplatePage() {
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
        </>
    );
}
