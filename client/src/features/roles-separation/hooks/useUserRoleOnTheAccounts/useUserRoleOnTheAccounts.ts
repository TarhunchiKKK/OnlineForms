import { rolesApi } from "@/entities/roles";
import { localStorageService } from "@/shared/services";
import { useParams } from "react-router-dom";
import { UserPermissionsChangeContext } from "../../utils";
import { useContextObserver } from "@/shared/hooks";

export function useUserRoleOnTheAccounts() {
    const { accountId } = useParams();

    const authToken = localStorageService.auth.getAuthToken();

    const { data, refetch: refetchRole } = rolesApi.useCheckRolesOnTheAccountQuery({
        authToken: authToken!,
        accountId,
    });

    useContextObserver(UserPermissionsChangeContext, () => refetchRole());

    return {
        userRoleOnTheAccounts: data?.role,
    };
}
