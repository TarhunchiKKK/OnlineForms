import { TCreateAnyQuestionDto } from "@/entities/questions";
import { TemplateTopics } from "../models/enums";

export type TCreateTemplateDto = {
    data: {
        title: string;

        description: string;

        topic: TemplateTopics;

        questions: TCreateAnyQuestionDto[];
    };

    authToken: string;
};

export type TFindTemplatesQueryArgs = {
    page: number;

    limit: number;
};
