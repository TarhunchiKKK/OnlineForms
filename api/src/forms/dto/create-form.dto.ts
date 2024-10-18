import { CreateAnswerDto } from "./create-answer.dto";

export class CreateFormDto {
    creator: {
        id: string;
    };

    template: {
        id: string;
    };

    answers: Omit<CreateAnswerDto, "template">[];
}
