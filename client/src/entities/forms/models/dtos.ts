import { TCreateAnyAnswerDto } from "@/entities/answers";

export type TCreateFormDto = {
    data: {
        originalTemplate: {
            id: string;
        };

        answers: TCreateAnyAnswerDto[];
    };

    authToken: string;
};
