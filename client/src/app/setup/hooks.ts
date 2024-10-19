import { authApi } from "@/features/auth-with-api";
import { localStorageService } from "@/shared/services";

export function useSetupAuth() {
    const authToken = localStorageService.auth.getAuthToken();
    const { data: userProfile } = authApi.useGetProfileQuery(authToken);

    if (userProfile) {
        localStorageService.user.saveProfile(userProfile);
    }
}
