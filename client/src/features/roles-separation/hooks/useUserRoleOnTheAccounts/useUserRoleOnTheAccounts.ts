import { rolesApi } from "@/entities/roles";
import { localStorageService } from "@/shared/services";
import { useParams } from "react-router-dom";

export function useUserRoleOnTheAccounts() {
    const { accountId } = useParams();

    const authToken = localStorageService.auth.getAuthToken();

    const { data } = rolesApi.useCheckRolesOnTheAccountQuery({
        authToken: authToken!,
        accountId,
    });

    return {
        userRoleOnTheAccounts: data?.role,
    };
}
