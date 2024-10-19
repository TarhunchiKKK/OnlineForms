import { UserRoles } from "./roles";

export type TUser = {
    id: string;

    username: string | null;

    email: string;

    password: string | null;

    role: UserRoles;
};

export type TUserProfile = {
    id: string;

    email: string;

    role: UserRoles;
};
