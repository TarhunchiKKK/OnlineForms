import { useCreateTemplate } from "./useCreateTemplate";
import { AddQuestionButton, QuestionsList, TemplateHeader } from "@/features/template-editing";
import { templateEditorContext } from "./constants";

export function CreateTemplatePage() {
    const { template, questions } = useCreateTemplate();

    return (
        <>
            <TemplateHeader {...template} />

            <QuestionsList questions={questions} context={templateEditorContext} />

            <AddQuestionButton />
        </>
    );
}
