import { TUserProfile } from "@/entities/users/models";

export const localStorageService = {
    auth: {
        authTokenKey: import.meta.env.VITE_TOKEN_LOCALSTORAGE_KEY,

        getAuthToken() {
            return localStorage.getItem(this.authTokenKey);
        },

        removeAuthToken() {
            localStorage.removeItem(this.authTokenKey);
        },

        setAuthToken(token: string) {
            localStorage.setItem(this.authTokenKey, token);
        },
    },

    user: {
        userKey: import.meta.env.VITE_USER_LOCALSTORAGE_KEY,

        getProfile() {
            const userProfile = localStorage.getItem(this.userKey);

            if (!userProfile) {
                return null;
            }

            return JSON.parse(userProfile) as TUserProfile;
        },

        saveProfile(userProfile: TUserProfile) {
            const parsedProfile = JSON.stringify(userProfile);
            localStorage.setItem(this.userKey, parsedProfile);
        },
    },
};
