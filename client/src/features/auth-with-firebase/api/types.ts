import { TUser } from "@/entities/users";

export type TSIgnInQueryArgs = {
    username: string | null;

    email: string;
};

export type TSIgnInResponse = {
    user: Omit<TUser, "password">;

    access: string;
};

export interface IGoogleProviderData {
    displayName: string | null;

    email: string | null;
}
