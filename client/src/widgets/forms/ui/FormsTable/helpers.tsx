import { FormsSortOrders, TForm } from "@/entities/forms";
import { routes } from "@/shared/constants";
import { formatDate } from "@/shared/helpers";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

export const createSortableHeaders = (setSortOrder: (_: FormsSortOrders) => void) => {
    return () => {
        return (
            <tr>
                <th
                    className="text-left cursor-pointer"
                    onClick={() => setSortOrder(FormsSortOrders.Creator)}
                >
                    <FormattedMessage id="creator" />
                </th>
                <th
                    className="text-left cursor-pointer"
                    onClick={() => setSortOrder(FormsSortOrders.CreatedAt)}
                >
                    <FormattedMessage id="created" />
                </th>
            </tr>
        );
    };
};

export const renderFormsTableHeaders = () => {
    return (
        <tr>
            <th className="text-left">
                {" "}
                <FormattedMessage id="creator" />
            </th>
            <th className="text-left">
                {" "}
                <FormattedMessage id="created" />
            </th>
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
            <td className="table-cell">
                <NavLink to={route}>{form.creator.username ?? form.creator.email}</NavLink>
            </td>

            <td className="table-cell">{formatDate(form.createdAt)}</td>
        </tr>
    );
};
