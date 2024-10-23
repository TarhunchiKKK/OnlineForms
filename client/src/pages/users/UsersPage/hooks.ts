import { OperationsOnTheAccounts } from "@/entities/roles";
import { usersApi } from "@/entities/users";
import { useUserRoleOnTheAccounts } from "@/features/roles-separation";
import { routes } from "@/shared/constants";
import { localStorageService } from "@/shared/services";

export function useUsers() {
    const authToken = localStorageService.auth.getAuthToken();

    const { data: users, isError } = usersApi.useFindAllQuery(authToken!);

    return {
        users: isError ? [] : users,
    };
}

export function useRedirectProps() {
    const { userRoleOnTheAccounts } = useUserRoleOnTheAccounts();

    const redirectRoute = routes.Home;

    return {
        role: userRoleOnTheAccounts,
        operation: OperationsOnTheAccounts.ViewUsers,
        route: redirectRoute,
    };
}
