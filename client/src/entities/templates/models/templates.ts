import { TQuestion } from "@/entities/questions";
import { TUser } from "@/entities/users";
import { TemplateTopics } from "./enums";
import { Descendant } from "slate";
import { TTag } from "@/entities/tags";

export type TTemplate = {
    id: string;

    title: string;

    description: Descendant[];

    topic: TemplateTopics;

    image: string | null;

    creator: TUser;

    createdAt: Date;

    updatedAt: Date;

    tags: TTag[];

    publicAccess: boolean;

    availableUsers: TUser[];
};

export type TFullTemplate = TTemplate & {
    questions: TQuestion[];
};
