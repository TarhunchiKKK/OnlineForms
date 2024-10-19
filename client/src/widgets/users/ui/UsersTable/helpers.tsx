import { UserRoles, UserStatuses } from "@/entities/users";
import { Button } from "@/shared/ui";
import { TCreateRowRenderer, TUserData } from "./types";

export const renderUsersTableHeaders = () => {
    return (
        <tr>
            <th className="text-left">Nick/Email</th>
            <th className="text-left">Status</th>
            <th className="text-left">Role</th>
            <th className="text-left">Change status</th>
            <th className="text-left">Change role</th>
        </tr>
    );
};

export const createRowRenderer: TCreateRowRenderer = (changeStatus, changeRole, authToken) => {
    return (user: TUserData) => {
        const handleChangeStatus = () => {
            const nextStatus =
                user.status === UserStatuses.Active ? UserStatuses.Blocked : UserStatuses.Active;

            changeStatus({
                data: {
                    id: user.id,
                    status: nextStatus,
                },
                authToken,
            });
        };

        const handleChangeRole = () => {
            const nextRole =
                user.role === UserRoles.Admin ? UserRoles.AuthorizedUser : UserRoles.Admin;

            changeRole({
                data: {
                    id: user.id,
                    role: nextRole,
                },
                authToken,
            });
        };

        return (
            <tr key={user.id} className="table-row h-12 px-2 py-4 rounded-lg overflow-hidden">
                <td className="text-left">{user.username ?? user.email}</td>

                <td className="text-left">{user.status}</td>

                <td className="text-left">{user.role}</td>

                <td className="text-left">
                    <Button
                        content={user.status === UserStatuses.Active ? "Block" : "Unblock"}
                        size="md"
                        onClick={handleChangeStatus}
                    />
                </td>

                <td className="text-left">
                    <Button
                        content={user.role === UserRoles.Admin ? "-> User" : "-> Admin"}
                        size="md"
                        onClick={handleChangeRole}
                    />
                </td>
            </tr>
        );
    };
};
