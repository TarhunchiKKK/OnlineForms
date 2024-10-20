import { UserRoles } from "src/roles/enums/user-roles.enum";

export class ChangeUserRoleDto {
    id: string;

    role: UserRoles;
}
