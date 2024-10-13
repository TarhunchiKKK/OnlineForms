import { TTemplate } from "@/entities/templates";
import { routes } from "@/shared/constants";
import { formatDate } from "@/shared/helpers";
import { NavLink } from "react-router-dom";

export const renderTemplatesTableHeaders = () => {
    return (
        <tr>
            <th className="text-left">Title</th>
            <th className="text-left">Topic</th>
            <th className="text-left">Creator</th>
            <th className="text-left">Created</th>
            <th className="text-left">Last updated</th>
        </tr>
    );
};

export const renderTemplateRow = (template: TTemplate) => {
    return (
        <tr
            key={template.id}
            className="table-row h-12 px-2 py-4 rounded-lg overflow-hidden hover:bg-slate-300 duration-300"
        >
            <NavLink to={`${routes.EditTemplate}/${template.id}`}>
                <td className="table-cell">{template.title}</td>
            </NavLink>

            <td className="table-cell">{template.topic}</td>
            <td className="table-cell">{template.creator.username ?? template.creator.email}</td>
            <td className="table-cell">{formatDate(template.createdAt)}</td>
            <td className="table-cell">{formatDate(template.updatedAt)}</td>
        </tr>
    );
};
