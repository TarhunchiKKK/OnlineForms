import { routes } from "@/shared/constants";
import { useIntl } from "react-intl";

export const useCreateTabs = (templateId: string) => {
    const intl = useIntl();

    return [
        {
            title: intl.formatMessage({ id: "settings" }),
            route: routes.createTemplateSettingsRoute(templateId),
        },
        {
            title: intl.formatMessage({ id: "template" }),
            route: routes.createEditTemplateRoute(templateId),
        },
        {
            title: intl.formatMessage({ id: "forms" }),
            route: routes.createTemplateFormsRoute(templateId),
        },
    ];
};
