import { CreateAnswerDto } from "../../answers/dto/create-answer.dto";

export class CreateFormDto {
    creator: {
        id: string;
    };

    template: {
        id: string;
    };

    answers: Omit<CreateAnswerDto, "template">[];
}
