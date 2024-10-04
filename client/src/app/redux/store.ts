import { userSlice } from "@/entities/user";
import { authApi } from "@/features/auth-with-api";
import { configureStore } from "@reduxjs/toolkit";

export const reduxStore = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
