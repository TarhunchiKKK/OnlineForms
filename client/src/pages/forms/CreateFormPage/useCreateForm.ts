import { formsApi } from "@/entities/forms";
import { questionsApi, TQuestion } from "@/entities/questions";
import { templatesApi } from "@/entities/templates";
import { useQuestions } from "@/features/questions-editing";
import { useTemplate } from "@/features/template-editing";
import { useParams } from "react-router-dom";
import { localStorageService } from "@/shared/services";
import { useMemo } from "react";
import { QuestionsToAnswersAdapter } from "@/features/answers-editing";

export function useCreateForm() {
    const { templateId } = useParams();
    const [createForm] = formsApi.useCreateMutation();

    const { data: fetchedTemplate } = templatesApi.useFindOneQuery(templateId!);
    const { data: fetchedQuestions } = questionsApi.useFindByTemplateQuery(templateId!);

    const { template, handlers } = useTemplate(fetchedTemplate);
    const { questions } = useQuestions(fetchedQuestions);

    const answers = useMemo(
        () => QuestionsToAnswersAdapter.toCreateAnswerDtos(questions as TQuestion[]),
        [questions],
    );

    const handleSaveForm = async () => {
        const authToken = localStorageService.auth.getAuthToken();

        await createForm({
            data: {
                template: {
                    id: templateId!,
                },
                answers: answers,
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
