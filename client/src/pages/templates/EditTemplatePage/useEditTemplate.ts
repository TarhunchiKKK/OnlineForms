import { useParams } from "react-router-dom";
import { useQuestions, useTemplate } from "@/features/template-editing";
import { questionsApi, TQuestion } from "@/entities/questions";
import { templatesApi } from "@/entities/templates";

export function useEditTemplate() {
    const { id: templateId } = useParams();

    const { data: fetchedTemplate } = templatesApi.useFindOneQuery(templateId!);
    const { data: fetchedQuestions } = questionsApi.useFindByTemplateQuery(templateId!);

    const { template, handlers } = useTemplate(fetchedTemplate);

    const { questions } = useQuestions(fetchedQuestions);

    return {
        template: {
            template,
            handlers,
            editable: true,
        },
        questions: questions as TQuestion[],
    };
}
