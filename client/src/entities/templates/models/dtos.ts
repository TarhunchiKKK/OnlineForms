import { Descendant } from "slate";
import { TemplateTopics } from "./enums";

export type TCreateTemplateDto = {
    data: {
        title: string;

        description: string;

        topic: TemplateTopics;
    };

    authToken: string;
};

export type TUpdateTemplateDto = {
    data: {
        id: string;

        title: string;

        description: Descendant[];

        topic: TemplateTopics;
    };
};
