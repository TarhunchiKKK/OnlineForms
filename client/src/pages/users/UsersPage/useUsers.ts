import { usersApi } from "@/entities/users";
import { localStorageService } from "@/shared/services";

export function useUsers() {
    const authToken = localStorageService.auth.getAuthToken();

    const { data: users } = usersApi.useFindAllQuery(authToken!);

    return {
        users: users ?? [],
    };
}
