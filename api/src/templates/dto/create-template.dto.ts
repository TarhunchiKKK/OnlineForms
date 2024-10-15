import { TemplateTopics } from "../enums/template-topics.enum";

export class CreateTemplateDto {
    title: string;

    description: string;

    topic: TemplateTopics;

    creator: {
        id: string;
    };
}
