import { templatesApi } from "@/entities/templates";
import { useQuestions, useTemplate } from "@/features/template-editing";

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
        await createTemplate({
            title,
            description: JSON.stringify(description),
            topic,
            questions,
            creator: {
                id: "",
            },
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
