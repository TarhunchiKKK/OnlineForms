import { TemplateTopics } from "@/entities/templates";
import { Descendant } from "slate";

export const defaultTemplateTitle = "My form";

export const defaultTemplateDescription: Descendant[] = [
    {
        type: "paragraph",
        children: [
            {
                text: "This form is about...",
            },
        ],
    },
];

export const defaultTemplateTopic = TemplateTopics.Quiz;
