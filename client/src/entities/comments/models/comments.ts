import { TTemplate } from "@/entities/templates";
import { TUser } from "@/entities/users";

export type TComment = {
    id: string;

    content: string;

    creator: TUser;
};

export type TFullComment = TComment & {
    template: TTemplate;
};
