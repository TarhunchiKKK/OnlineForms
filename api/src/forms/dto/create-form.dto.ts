import { CreateAnswerDto } from "./create-answer.dto";

export class CreateFormDto {
    user: {
        id: string;
    };

    template: {
        id: string;
    };

    answers: Omit<CreateAnswerDto, "template">[];
}
