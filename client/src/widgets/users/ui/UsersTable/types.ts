import { TChangeUserRoleDto, TChangeUserStatusDto, TRemoveUserDto, TUser } from "@/entities/users";

export type TUserData = Pick<TUser, "id" | "email" | "role" | "status"> & {
    username?: string | null;
};

export type TUsersTableProps = {
    users: TUserData[];
};

export type TCreateRowRenderer = (
    handlers: {
        changeStatus: (_: TChangeUserStatusDto) => Promise<unknown>;

        changeRole: (_: TChangeUserRoleDto) => Promise<unknown>;

        remove: (_: TRemoveUserDto) => Promise<unknown>;
    },

    authToken: string,
) => (userData: TUserData) => JSX.Element;
