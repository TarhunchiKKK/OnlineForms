import { useParams } from "react-router-dom";
import { useQuestions } from "@/features/questions-editing";
import { templatesApi } from "@/entities/templates";
import { questionsApi, TQuestion } from "@/entities/questions";
import { useTemplateEditor } from "@/features/template-editing/hooks";

export function useEditTemplate() {
    const { templateId } = useParams();

    const { data: fetchedTemplate } = templatesApi.useFindOneQuery(templateId!);
    const { data: fetchedQuestions } = questionsApi.useFindByTemplateQuery(templateId!, {
        refetchOnFocus: true,
    });

    const templateEditor = useTemplateEditor(fetchedTemplate);

    const { questions } = useQuestions(fetchedQuestions);

    return {
        templateEditor,
        questions: questions as TQuestion[],
    };
}
