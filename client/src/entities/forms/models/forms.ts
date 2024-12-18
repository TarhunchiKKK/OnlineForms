import { TAnyAnswer } from "@/entities/answers";
import { TTemplate } from "@/entities/templates";
import { TUser } from "@/entities/users";

export type TForm = {
    id: string;

    createdAt: Date;

    creator: TUser;

    template: TTemplate;
};

export type TFullForm = TForm & {
    answers: TAnyAnswer[];
};
