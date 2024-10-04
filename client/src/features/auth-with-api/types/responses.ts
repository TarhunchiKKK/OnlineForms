import { IUser } from "@/entities/user";

export type TSIgnUpResponse = {
    user: IUser;

    access: string;
};

export type TSIgnInResponse = {
    user: IUser;

    access: string;
};
