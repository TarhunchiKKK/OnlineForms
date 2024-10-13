export const localStorageService = {
    auth: {
        authTokenKey: import.meta.env.VITE_TOKEN_LOCALSTORAGE_KEY,

        getAuthToken() {
            return localStorage.getItem(this.authTokenKey);
        },

        resetAuthToken() {
            localStorage.removeItem(this.authTokenKey);
        },

        setAuthToken(token: string) {
            localStorage.setItem(this.authTokenKey, token);
        },
    },

    user: {
        userIdKey: import.meta.env.VITE_USER_ID_LOCALSTORAGE_KEY,

        getUserId() {
            return localStorage.getItem(this.userIdKey);
        },

        resetUserId() {
            localStorage.removeItem(this.userIdKey);
        },

        setUserId(userId: string) {
            localStorage.setItem(this.userIdKey, userId);
        },
    },
};
