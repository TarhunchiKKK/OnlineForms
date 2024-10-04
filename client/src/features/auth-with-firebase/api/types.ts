import { IUser } from "@/entities/user";

export type TSIgnInQueryArgs = {
    username: string | null;

    email: string;
};

export type TSIgnInResponse = {
    user: Omit<IUser, "password">;

    access: string;
};

export interface IGoogleProviderData {
    displayName: string | null;

    email: string | null;
}
