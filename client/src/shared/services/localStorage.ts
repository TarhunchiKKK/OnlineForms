import { Themes } from "@/features/dark-theme/types";
import { Locales } from "@/features/localization/types";

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

    locale: {
        localeKey: import.meta.env.VITE_LOCALSTORAGE_LOCALE_KEY,

        getLocale(): Locales | null {
            return localStorage.getItem(this.localeKey) as Locales;
        },

        setLocale(locale: string) {
            localStorage.setItem(this.localeKey, locale);
        },

        removeLocale() {
            localStorage.removeItem(this.localeKey);
        },
    },
};
