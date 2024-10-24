import { Themes } from "@/features/dark-theme/types";

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

    theme: {
        themeKey: import.meta.env.VITE_LOCALSTORAGE_THEME_KEY,

        getTheme(): Themes | null {
            return localStorage.getItem(this.themeKey) as Themes;
        },

        setTheme(theme: Themes) {
            localStorage.setItem(this.themeKey, theme);
        },

        removeTheme() {
            localStorage.removeItem(this.themeKey);
        },
    },
};
