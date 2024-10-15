import {
    AddQuestionButton,
    questionEditorsFactories,
    QuestionsList,
    TemplateHeader,
} from "@/features/template-editing";
import { useEditTemplate } from "./useEditTemplate";
import { templateEditorContext } from "./constants";

export function EditTemplatePage() {
    const { template, questions } = useEditTemplate();

    const questionsEditor = questionEditorsFactories[templateEditorContext].useEditor();

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
