import { TUserData } from "./types";

export const renderUsersTableHeaders = () => {
    return (
        <tr>
            <th className="text-left">Nick</th>
            <th className="text-left">Email</th>
            <th className="text-left">Role</th>
        </tr>
    );
};

export const renderUsersTableRow = (user: TUserData) => {
    return (
        <tr
            key={user.id}
            className="table-row h-12 px-2 py-4 rounded-lg overflow-hidden hover:bg-slate-300 duration-300"
        >
            <td className="text-left">{user.username ?? "-"}</td>
            <td className="text-left">{user.email}</td>
            <td className="text-left">{user.role}</td>
        </tr>
    );
};
