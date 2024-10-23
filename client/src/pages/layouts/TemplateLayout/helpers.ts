import { routes } from "@/shared/constants";

export const createTabs = (templateId: string) => {
    return [
        {
            title: "Settings",
            route: routes.createTemplateSettingsRoute(templateId),
        },
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
