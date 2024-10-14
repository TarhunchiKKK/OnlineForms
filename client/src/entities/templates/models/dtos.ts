import { TCreateAnyQuestionDto, TUpdateAnyQuestionDto } from "@/entities/questions";
import { TemplateTopics } from "./enums";

export type TCreateTemplateDto = {
    data: {
        title: string;

        description: string;

        topic: TemplateTopics;

        questions: TCreateAnyQuestionDto[];
    };

    authToken: string;
};

export type TUpdateTemplateDto = {
    data: {
        title: string;

        description: string;

        topic: TemplateTopics;

        questions: TUpdateAnyQuestionDto[];
    };
};
