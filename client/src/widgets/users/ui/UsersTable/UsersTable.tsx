import { Table } from "@/shared/ui";
import { TUsersTableProps } from "./types";
import { renderUsersTableHeaders, createRowRenderer } from "./helpers";
import { usersApi } from "@/entities/users";
import { localStorageService } from "@/shared/services";

export function UsersTable({ users }: TUsersTableProps) {
    const authToken = localStorageService.auth.getAuthToken();

    const [changeStatus] = usersApi.useChangeStatusMutation();
    const [changeRole] = usersApi.useChangeRoleMutation();
    const [remove] = usersApi.useRemoveMutation();

    const handlers = {
        changeStatus,
        changeRole,
        remove,
    };

    return (
        <Table
            items={users}
            renderItem={createRowRenderer(handlers, authToken!)}
            renderHeaders={renderUsersTableHeaders}
        />
    );
}
