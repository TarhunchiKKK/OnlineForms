import { rolesApi } from "@/entities/roles";
import { localStorageService } from "@/shared/services";
import { useParams } from "react-router-dom";

export function useUserRoleOnTheTemplate() {
    const { id: templateId } = useParams();

    const authToken = localStorageService.auth.getAuthToken();

    const { data } = rolesApi.useCheckRolesOnTheTemplateQuery({
        authToken: authToken!,
        templateId,
    });

    return {
        userRoleOnTheTemplate: data?.role,
    };
}
