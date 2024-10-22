import { routes } from "@/shared/constants";

export const createTabs = (templateId: string) => {
    return [
        {
            title: "Create form",
            route: routes.createCreateFormRoute(templateId),
        },
        {
            title: "Your forms",
            route: routes.createUserFormsOnTemplateRoute(templateId),
        },
    ];
};
