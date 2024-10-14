import { useQuestions, useTemplate } from "@/features/template-editing";
import { templatesApi } from "@/entities/templates";
import { localStorageService } from "@/shared/services";
import { TQuestion } from "@/entities/questions";

export function useCreateTemplate() {
    const [createTemplate] = templatesApi.useCreateMutation();

    const {
        title,
        description,
        topic,
        handleTitleChange,
        handleDescriptionChange,
        handleTopicChange,
    } = useTemplate();

    const { questions } = useQuestions();

    const handleSaveTemplate = async () => {
        const authToken = localStorageService.auth.getAuthToken();

        await createTemplate({
            data: {
                title,
                description: JSON.stringify(description),
                topic,
                questions,
            },
            authToken: authToken!,
        });
    };

    return {
        template: {
            data: {
                title,
                description,
                topic,
            },
            handlers: {
                handleTitleChange,
                handleDescriptionChange,
                handleTopicChange,
            },
            editable: true,
        },
        questions: questions as TQuestion[],
        handleSaveTemplate,
    };
}
