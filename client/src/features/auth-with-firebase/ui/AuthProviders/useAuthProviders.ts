import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/shared/constants";
import { localStorageService } from "@/shared/services";
import { authWithFirebase, authWithProviderData } from "../../api";
import { FirebaseAuthProviders } from "../../types";

export function useAuthProviders() {
    const navigate = useNavigate();

    function getAuthHandler(provider: FirebaseAuthProviders) {
        return async (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();

            const userData = await authWithFirebase(provider);

            if (userData) {
                const authResult = await authWithProviderData(userData.email, userData.username);

                if (authResult) {
                    const { access } = authResult;

                    localStorageService.auth.setAuthToken(access);

                    navigate(routes.Home);
                }
            }
        };
    }

    return {
        getAuthHandler,
    };
}
