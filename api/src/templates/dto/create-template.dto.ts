import { TemplateTopics } from "../enums/template-topics.enum";
import { CreateQuestionDto } from "src/templates/dto/create-question.dto";

export class CreateTemplateDto {
    title: string;

    description: string;

    topic: TemplateTopics;

    creator: {
        id: string;
    };

    questions: Omit<CreateQuestionDto, "template">[];
}
