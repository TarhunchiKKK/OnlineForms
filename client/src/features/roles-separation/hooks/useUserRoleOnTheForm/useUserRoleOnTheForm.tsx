import { rolesApi } from "@/entities/roles";
import { localStorageService } from "@/shared/services";
import { useParams } from "react-router-dom";
import { UserPermissionsChangeContext } from "../../utils";
import { useContextObserver } from "@/shared/hooks";

export function useUserRoleOnTheForm() {
    const { formId } = useParams();

    const authToken = localStorageService.auth.getAuthToken();

    const { data, refetch: refetchRole } = rolesApi.useChecRolesOnTheFormQuery({
        authToken: authToken!,
        formId,
    });

    useContextObserver(UserPermissionsChangeContext, () => refetchRole());

    return {
        userRoleOnTheForm: data?.role,
    };
}
