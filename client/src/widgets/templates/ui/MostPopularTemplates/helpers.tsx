import { TTemplate } from "@/entities/templates";
import { DefaultImage } from "@/shared/assets";
import { routes } from "@/shared/constants";
import { NavLink } from "react-router-dom";

export const renderTemplate = (template: TTemplate) => {
    const route = routes.createEditTemplateRoute(template.id);

    return (
        <NavLink to={route}>
            <div className="mx-auto flex flex-col justify-start items-center gap-4">
                <img
                    className="w-36 h-36"
                    src={template.image ?? DefaultImage}
                    alt={template.title}
                />

                <span>{template.title}</span>
            </div>
        </NavLink>
    );
};
