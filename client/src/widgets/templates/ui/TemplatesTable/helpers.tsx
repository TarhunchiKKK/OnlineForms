import { TemplatesSortOrders, TTemplate } from "@/entities/templates";
import { routes } from "@/shared/constants";
import { formatDate } from "@/shared/helpers";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

export const createSortableHeaders = (setSortOrder: (_: TemplatesSortOrders) => void) => {
    return () => {
        return (
            <tr>
                <th
                    className="text-left cursor-pointer"
                    onClick={() => setSortOrder(TemplatesSortOrders.Title)}
                >
                    <FormattedMessage id="title" />
                </th>
                <th
                    className="text-left cursor-pointer"
                    onClick={() => setSortOrder(TemplatesSortOrders.Topic)}
                >
                    <FormattedMessage id="topic" />
                </th>
                <th
                    className="text-left cursor-pointer"
                    onClick={() => setSortOrder(TemplatesSortOrders.Creator)}
                >
                    <FormattedMessage id="creator" />
                </th>
                <th
                    className="text-left cursor-pointer"
                    onClick={() => setSortOrder(TemplatesSortOrders.CreatedAt)}
                >
                    <FormattedMessage id="created" />
                </th>
                <th className="text-left">
                    <FormattedMessage id="last_updated" />
                </th>
            </tr>
        );
    };
};

export const renderTemplatesTableHeaders = () => {
    return (
        <tr>
            <th className="text-left">
                <FormattedMessage id="title" />
            </th>
            <th className="text-left">
                <FormattedMessage id="topic" />
            </th>
            <th className="text-left">
                {" "}
                <FormattedMessage id="creator" />
            </th>
            <th className="text-left">
                <FormattedMessage id="created" />
            </th>
            <th className="text-left">
                <FormattedMessage id="last_updated" />
            </th>
        </tr>
    );
};

export const renderTemplatesTableRow = (template: TTemplate) => {
    const route = routes.createEditTemplateRoute(template.id);

    return (
        <tr
            key={template.id}
            className="table-row h-12 px-2 py-4 rounded-lg overflow-hidden hover:bg-slate-300 duration-300"
        >
            <td className="table-cell">
                <NavLink to={route}>{template.title}</NavLink>
            </td>

            <td className="table-cell">{template.topic}</td>
            <td className="table-cell">{template.creator.username ?? template.creator.email}</td>
            <td className="table-cell">{formatDate(template.createdAt)}</td>
            <td className="table-cell">{formatDate(template.updatedAt)}</td>
        </tr>
    );
};
