import { TQuestion } from "@/entities/questions";
import { TemplateTopics } from "@/entities/templates";
import { ChangeEvent } from "react";
import { Descendant } from "slate";

export type TTemplateEditorProps = {
    template: {
        data: {
            title: string;
            description: Descendant[];
            topic: TemplateTopics;
        };
        handlers: {
            handleTitleChange: (_: ChangeEvent<HTMLInputElement>) => void;
            handleDescriptionChange: (_: Descendant[]) => void;
            handleTopicChange: (_: string) => void;
        };
    };

    questions: {
        data: Omit<TQuestion, "id">[];
        handlers: {
            handleAddQuestion: () => void;
        };
    };

    handleSubmit: () => Promise<void>;
};
