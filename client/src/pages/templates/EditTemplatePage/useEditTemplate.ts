import { useParams } from "react-router-dom";
import { useQuestions, useTemplate } from "@/features/template-editing";
import { TUpdateAnyQuestionDto } from "@/entities/questions";
import { templatesApi } from "@/entities/templates";

export function useEditTemplate() {
    const { id } = useParams();
    const { data: fetchedTemplate } = templatesApi.useFindOneQuery(id!);

    const [updateTemplate] = templatesApi.useUpdateMutation();

    const {
        title,
        description,
        topic,
        handleTitleChange,
        handleDescriptionChange,
        handleTopicChange,
    } = useTemplate(fetchedTemplate ?? null);

    const { questions, handleAddQuestion } = useQuestions(fetchedTemplate?.questions ?? null);

    const handleSaveTemplate = async () => {
        await updateTemplate({
            data: {
                title,
                description: JSON.stringify(description),
                topic,
                questions: questions as TUpdateAnyQuestionDto[],
            },
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
        },
        questions: {
            data: questions,
            handlers: {
                handleAddQuestion,
            },
        },
        handleSaveTemplate,
    };
}
