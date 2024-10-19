import { UserRoles, UserStatuses } from "./enums";

export type TChangeUserStatusDto = {
    data: {
        id: string;

        status: UserStatuses;
    };

    authToken: string;
};

export type TChangeUserRoleDto = {
    data: {
        id: string;

        role: UserRoles;
    };

    authToken: string;
};

export type TRemoveUserDto = {
    id: string;

    authToken: string;
};
