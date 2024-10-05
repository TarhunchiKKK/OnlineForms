import { TemplateTopics } from "../models/templateTopics";

export type TCreateTemplateQueryArgs = {
    title: string;

    description: string;

    topic: TemplateTopics;

    creator: {
        id: string;
    };
};

export type TFindTemplatesQueryArgs = {
    page: number;

    limit: number;
};
