import { CreateAnswerDto } from "./create-answer.dto";

export class CreateFilledTemplateDto {
    user: {
        id: string;
    };

    originalTemplate: {
        id: string;
    };

    answers: Omit<CreateAnswerDto, "template">[];
}
