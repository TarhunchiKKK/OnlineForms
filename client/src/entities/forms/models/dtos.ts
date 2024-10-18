import { TCreateAnswerDto } from "@/entities/answers";

export type TCreateFormDto = {
    data: {
        template: {
            id: string;
        };

        answers: TCreateAnswerDto[];
    };

    authToken: string;
};
