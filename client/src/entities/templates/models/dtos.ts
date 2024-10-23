import { Descendant } from "slate";
import { TemplateTopics } from "./enums";

export type TCreateTemplateDto = {
    data: {
        title: string;

        description: string;

        topic: TemplateTopics;

        image: string | null;
    };

    authToken: string;
};

export type TUpdateTemplateDto = {
    data: {
        id: string;

        title: string;

        description: Descendant[];

        topic: TemplateTopics;

        image: string | null;
    };
};
