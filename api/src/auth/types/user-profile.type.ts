import { UserRoles } from "src/roles/enums/user-roles.enum";

export type TUserProfile = {
    id: string;

    email: string;

    password: string;

    role: UserRoles;
};
