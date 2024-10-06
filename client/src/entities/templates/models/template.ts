import { IUser } from "@/entities/users";
import { TemplateTopics } from "./templateTopics";
import { TCreateAnyQuestionDto } from "@/entities/questions";

export interface ITemplate {
    id: string;

    title: string;

    description: string;

    topic: TemplateTopics;

    creator: IUser;

    createdAt: string;

    updatedAt: string;
}

export type TCreateTemplateDto = Pick<ITemplate, "title" | "description" | "topic"> & {
    creator: {
        id: string;
    };

    questions: TCreateAnyQuestionDto[];
};
