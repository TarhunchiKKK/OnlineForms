import { useUserRoleOnTheTemplate } from "@/features/roles-separation";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useCreateTabs } from "./helpers";
import { OperationsOnTheTemplate } from "@/entities/roles";
import { routes } from "@/shared/constants";

export function useTemplateLayout() {
    const { templateId } = useParams();

    const tabs = useCreateTabs(templateId!);

    const { userRoleOnTheTemplate } = useUserRoleOnTheTemplate();

    const redirectRoute = useMemo(() => routes.createCreateFormRoute(templateId!), [templateId]);

    return {
        redirectProps: {
            role: userRoleOnTheTemplate,
            operation: OperationsOnTheTemplate.SeeFullTemplate,
            route: redirectRoute,
        },
        tabs,
    };
}
