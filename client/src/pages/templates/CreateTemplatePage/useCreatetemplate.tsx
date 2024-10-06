import { ChangeEvent, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/shared/hooks";
import { questionsSlice } from "@/entities/questions";
import { TCreateTemplateDto, templatesApi, TemplateTopics } from "@/entities/templates";
import {
    defaultQuestion,
    defaultTemplateDescription,
    defaultTemplateTitle,
    defaultTemplateTopic,
} from "./constants";

export function useCreatetemplate() {
    const dispatch = useDispatch();

    const currentUser = useAppSelector((state) => state.user.user);

    const [createTemplate] = templatesApi.useCreateMutation();

    const [template, setTemplate] = useState<Omit<TCreateTemplateDto, "questions">>({
        title: defaultTemplateTitle,
        description: defaultTemplateDescription,
        topic: defaultTemplateTopic,
        creator: {
            id: currentUser ? currentUser.id : "",
        },
    });

    const questionsRecord = useAppSelector((state) => state.questions.entities);
    const questions = useMemo(() => Object.values(questionsRecord), [questionsRecord]);

    console.log(questions.length);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTemplate((prev) => ({
            ...prev,
            title: e.target.value,
        }));
    };

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTemplate((prev) => ({
            ...prev,
            description: e.target.value,
        }));
    };

    const handleTopicChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTemplate((prev) => ({
            ...prev,
            topic: e.target.value as TemplateTopics,
        }));
    };

    const handleAddQuestion = () => {
        dispatch(
            questionsSlice.actions.addQuestion({
                ...defaultQuestion,
                sequenceNumber: questions.length,
            }),
        );
    };

    const handleSaveTemplate = async () => {
        await createTemplate({ ...template, questions });
    };

    return {
        template,
        questions,
        handlers: {
            handleTitleChange,
            handleDescriptionChange,
            handleTopicChange,
            handleAddQuestion,
            handleSaveTemplate,
        },
    };
}
