import { authApi } from "@/features/auth-with-api";
import { localStorageService } from "@/shared/services";
import { useMemo } from "react";
import { UserPermissionsObserver } from "..";
import { TContextProps } from "./types";
import { UserPermissionsChangeContext } from "./constants";

export function UserPermissionsChangeContextProvider({ children }: TContextProps) {
    const authToken = localStorageService.auth.getAuthToken();

    const { data: userProfile } = authApi.useGetProfileQuery(authToken!);

    const observer = useMemo(() => {
        if (userProfile) {
            return new UserPermissionsObserver(userProfile.id);
        } else {
            return null;
        }
    }, [userProfile]);

    return (
        <UserPermissionsChangeContext.Provider value={{ observer }}>
            {children}
        </UserPermissionsChangeContext.Provider>
    );
}
