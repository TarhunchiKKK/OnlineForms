import { useParams } from "react-router-dom";
import { useTemplate } from "@/features/template-editing";
import { useQuestions } from "@/features/questions-editing";
import { templatesApi } from "@/entities/templates";
import { questionsApi, TQuestion } from "@/entities/questions";

export function useEditTemplate() {
    const { templateId } = useParams();

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
