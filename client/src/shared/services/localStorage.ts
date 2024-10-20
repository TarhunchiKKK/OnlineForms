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
};
