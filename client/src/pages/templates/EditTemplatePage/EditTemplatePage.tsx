import { AddQuestionButton, QuestionsList, TemplateHeader } from "@/features/template-editing";
import { useEditTemplate } from "./useEditTemplate";
import { templateEditorContext } from "./constants";
import { questionEditorFactory } from "@/features/questions-editing";

export function EditTemplatePage() {
    const { template, questions } = useEditTemplate();

    const questionsEditor = questionEditorFactory.useEditor();

    const handleCreateQuestion = () => {
        questionsEditor.createQuestion(template.template!.id);
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

            <QuestionsList
                questions={questions}
                questionsEditor={questionsEditor}
                context={templateEditorContext}
            />

            <AddQuestionButton createQuestion={handleCreateQuestion} />
        </>
    );
}
