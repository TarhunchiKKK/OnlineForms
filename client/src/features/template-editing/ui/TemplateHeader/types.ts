import { TemplateTopics } from "@/entities/templates";
import { ChangeEvent } from "react";
import { Descendant } from "slate";

export type TTemplateHeaderProps = {
    editable: boolean;

    template: {
        title: string;

        description: Descendant[];

        topic: TemplateTopics;
    };

    handlers: {
        handleTitleChange: (_: ChangeEvent<HTMLInputElement>) => void;

        handleDescriptionChange: (value: Descendant[]) => void;

        handleTopicChange: (value: string) => void;
    };
};
