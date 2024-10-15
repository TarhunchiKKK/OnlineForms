import { TemplateTopics } from "../models";
import { Descendant } from "slate";

const defaultTemplateDescription: Descendant[] = [
    {
        type: "paragraph",
        children: [
            {
                text: "",
            },
        ],
    },
];

export const defaultTemplate = {
    title: "New template",
    description: JSON.stringify(defaultTemplateDescription),
    topic: TemplateTopics.Education,
};

export const updateTemplateDelay = 3000;
