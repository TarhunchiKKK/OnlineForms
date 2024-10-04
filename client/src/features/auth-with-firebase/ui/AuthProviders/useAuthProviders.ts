import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSlice } from "@/entities/user";
import { routes } from "@/shared/constants";
import { localStorageService } from "@/shared/services";
import { authWithFirebase, authWithProviderData } from "../../api";
import { FirebaseAuthProviders } from "../../types";

export function useAuthProviders() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function getAuthHandler(provider: FirebaseAuthProviders) {
        return async (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();

            const userData = await authWithFirebase(provider);

            if (userData) {
                const authResult = await authWithProviderData(userData.email, userData.username);

                if (authResult) {
                    const { user, access } = authResult;

                    localStorageService.setAuthToken(access);

                    dispatch(userSlice.actions.setCurrentUser(user));

                    navigate(routes.Home);
                }
            }
        };
    }

    return {
        getAuthHandler,
    };
}
