import { rolesApi } from "@/entities/roles";
import { localStorageService } from "@/shared/services";
import { useParams } from "react-router-dom";

export function useUserRoleOnTheForm() {
    const { formId } = useParams();

    const authToken = localStorageService.auth.getAuthToken();

    const { data } = rolesApi.useChecRolesOnTheFormQuery({
        authToken: authToken!,
        formId,
    });

    return {
        userRoleOnTheForm: data?.role,
    };
}
