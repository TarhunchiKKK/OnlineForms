import { routes } from "@/shared/constants";

export const createTabs = (templateId: string) => {
    return [
        {
            title: "Template",
            route: routes.createEditTemplateRoute(templateId),
        },
        {
            title: "Forms",
            route: routes.createTemplateFormsRoute(templateId),
        },
    ];
};
