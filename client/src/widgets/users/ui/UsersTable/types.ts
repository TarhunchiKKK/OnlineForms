import { TUser } from "@/entities/users";

export type TUserData = Pick<TUser, "id" | "email" | "role"> & {
    username?: string | null;
};

export type TUsersTableProps = {
    users: TUserData[];
};
