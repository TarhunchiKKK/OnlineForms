import { UserRoles, UserStatuses } from "./enums";

export type TUser = {
    id: string;

    username: string | null;

    email: string;

    password: string | null;

    role: UserRoles;

    status: UserStatuses;
};

export type TUserProfile = {
    id: string;

    email: string;

    role: UserRoles;
};
