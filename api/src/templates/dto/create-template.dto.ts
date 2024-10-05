import { User } from "src/users/entities/user.entity";
import { TemplateTopics } from "../enums/template-topics.enum";

export class CreateTemplateDto {
    title: string;

    description: string;

    topic: TemplateTopics;

    creator: Pick<User, "id">;
}
