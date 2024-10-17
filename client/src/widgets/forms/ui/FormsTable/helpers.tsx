import { TForm } from "@/entities/forms";
import { routes } from "@/shared/constants";
import { formatDate } from "@/shared/helpers";
import { NavLink } from "react-router-dom";

export const renderFormsTableheaders = () => {
    return (
        <tr>
            <th className="text-left">Creator</th>
            <th className="text-left">Created</th>
        </tr>
    );
};

export const renderFormsTableRow = (form: TForm) => {
    const route = routes.createEditFormRoute(form.id);

    return (
        <tr
            key={form.id}
            className="table-row h-12 px-2 py-4 rounded-lg overflow-hidden hover:bg-slate-300 duration-300"
        >
            {/* <td className="table-cell">
                <NavLink to={route}>{form.user.username ?? form.user.email}</NavLink>
            </td> */}

            <td className="table-cell">
                <NavLink to={route}>{"user"}</NavLink>
            </td>

            <td className="table-cell">{formatDate(form.createdAt)}</td>
        </tr>
    );
};
