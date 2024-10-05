import { IUser } from "@/entities/users";
import { TemplateTopics } from "./templateTopics";

export interface ITemplate {
    id: string;

    title: string;

    description: string;

    topic: TemplateTopics;

    creator: IUser;

    createdAt: string;

    updatedAt: string;
}
