import { useQuestions, useTemplate } from "@/features/template-editing";
import { templatesApi } from "@/entities/templates";
import { localStorageService } from "@/shared/services";

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

    const { questions, handleAddQuestion } = useQuestions();

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
        data: {
            title,
            description,
            topic,
            questions,
        },
        handlers: {
            handleTitleChange,
            handleDescriptionChange,
            handleTopicChange,
            handleAddQuestion,
            handleSaveTemplate,
        },
    };
}
