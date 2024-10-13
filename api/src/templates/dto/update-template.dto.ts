import { TemplateTopics } from "../enums/template-topics.enum";
import { UpdateQuestionDto } from "./update-question.dto";

export class UpdateTemplateDto {
    id: string;

    title?: string;

    description?: string;

    topic?: TemplateTopics;

    questions: UpdateQuestionDto[];
}
