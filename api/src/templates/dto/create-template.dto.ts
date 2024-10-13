import { User } from "src/users/entities/user.entity";
import { TemplateTopics } from "../enums/template-topics.enum";
import { CreateQuestionDto } from "src/questions/dto/create-question.dto";

export class CreateTemplateDto {
    title: string;

    description: string;

    topic: TemplateTopics;

    creator: {
        id: string;
    };

    questions: Omit<CreateQuestionDto, "template">[];
}
