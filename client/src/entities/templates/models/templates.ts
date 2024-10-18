import { TQuestion } from "@/entities/questions";
import { TUser } from "@/entities/users";
import { TemplateTopics } from "./enums";
import { Descendant } from "slate";

export type TTemplate = {
    id: string;

    title: string;

    description: Descendant[];

    topic: TemplateTopics;

    creator: TUser;

    createdAt: Date;

    updatedAt: Date;
};

export type TFullTemplate = TTemplate & {
    questions: TQuestion[];
};
