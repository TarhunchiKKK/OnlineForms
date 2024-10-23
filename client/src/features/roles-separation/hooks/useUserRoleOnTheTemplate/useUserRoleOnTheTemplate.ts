import { rolesApi } from "@/entities/roles";
import { localStorageService } from "@/shared/services";
import { useParams } from "react-router-dom";
import { UserPermissionsChangeContext } from "../../utils";
import { useContextObserver } from "@/shared/hooks";

export function useUserRoleOnTheTemplate() {
    const { templateId } = useParams();

    const authToken = localStorageService.auth.getAuthToken();

    const { data, refetch: refetchRole } = rolesApi.useCheckRolesOnTheTemplateQuery({
        authToken: authToken!,
        templateId,
    });

    useContextObserver(UserPermissionsChangeContext, () => refetchRole());

    return {
        userRoleOnTheTemplate: data?.role,
    };
}
