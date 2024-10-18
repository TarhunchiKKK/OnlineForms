import { TemplateTopics } from "../enums/template-topics.enum";

export class UpdateTemplateDto {
    id: string;

    title?: string;

    description?: string;

    topic?: TemplateTopics;
}
