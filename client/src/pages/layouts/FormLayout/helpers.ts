import { routes } from "@/shared/constants";
import { useIntl } from "react-intl";

export const useCreateTabs = (templateId: string) => {
    const intl = useIntl();

    return [
        {
            title: intl.formatMessage({ id: "create_form" }),
            route: routes.createCreateFormRoute(templateId),
        },
        {
            title: intl.formatMessage({ id: "your_forms" }),
            route: routes.createUserFormsOnTemplateRoute(templateId),
        },
    ];
};
