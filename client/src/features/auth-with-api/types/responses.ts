import { IUser } from "@/entities/users";

export type TSIgnUpResponse = {
    user: IUser;

    access: string;
};

export type TSIgnInResponse = {
    user: IUser;

    access: string;
};
