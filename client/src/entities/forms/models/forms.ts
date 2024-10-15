import { TAnyAnswer } from "@/entities/answers";
import { TTemplate } from "@/entities/templates";
import { TUser } from "@/entities/users";

export type TForm = {
    id: string;

    createdAt: Date;

    user: TUser;

    originalTemplate: TTemplate;
};

export type TFullForm = TForm & {
    answers: TAnyAnswer[];
};