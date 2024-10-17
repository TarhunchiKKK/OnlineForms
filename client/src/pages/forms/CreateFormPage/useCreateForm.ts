import { formsApi } from "@/entities/forms";
import { questionsApi, TAnyQuestion, TQuestion } from "@/entities/questions";
import { templatesApi } from "@/entities/templates";
import { useQuestions } from "@/features/questions-editing";
import { useTemplate } from "@/features/template-editing";
import { useParams } from "react-router-dom";
import { localStorageService } from "@/shared/services";

export function useCreateForm() {
    const { id: templateId } = useParams();
    const [createForm] = formsApi.useCreateMutation();

    const { data: fetchedTemplate } = templatesApi.useFindOneQuery(templateId!);
    const { data: fetchedQuestions } = questionsApi.useFindByTemplateQuery(templateId!);

    const { template, handlers } = useTemplate(fetchedTemplate);
    const { questions } = useQuestions(fetchedQuestions);

    const handleSaveForm = async () => {
        const authToken = localStorageService.auth.getAuthToken();

        await createForm({
            data: {
                template: {
                    id: templateId!,
                },
                answers: questions as TAnyQuestion[],
            },
            authToken: authToken!,
        });
    };

    return {
        template: {
            template,
            handlers,
            editable: false,
        },
        questions: questions as TQuestion[],
        handleSaveForm,
    };
}
