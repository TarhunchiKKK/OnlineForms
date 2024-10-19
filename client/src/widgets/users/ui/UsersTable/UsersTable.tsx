import { Table } from "@/shared/ui";
import { TUsersTableProps } from "./types";
import { renderUsersTableHeaders, renderUsersTableRow } from "./helpers";

export function UsersTable({ users }: TUsersTableProps) {
    return (
        <Table
            items={users}
            renderItem={renderUsersTableRow}
            renderHeaders={renderUsersTableHeaders}
        />
    );
}
