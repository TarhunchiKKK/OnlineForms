import { TAnyQuestion } from "@/entities/questions";

export type TCreateFormDto = {
    data: {
        template: {
            id: string;
        };

        answers: TAnyQuestion[];
    };

    authToken: string;
};
