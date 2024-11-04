import { usersApi } from "@/entities/users";
import { localStorageService } from "@/shared/services";

export function useSalesForceModal() {
    const authToken = localStorageService.auth.getAuthToken();

    const { data: user } = usersApi.useFindMeQuery(authToken!);

    return { user };
}
