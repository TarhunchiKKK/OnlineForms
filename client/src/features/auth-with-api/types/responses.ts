import { TUser } from "@/entities/users";

export type TSIgnUpResponse = {
    user: TUser;

    access: string;
};

export type TSIgnInResponse = {
    user: TUser;

    access: string;
};
