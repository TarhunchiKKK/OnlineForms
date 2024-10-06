import { questionsSlice } from "@/entities/questions";
import { templatesApi } from "@/entities/templates";
import { userSlice } from "@/entities/users";
import { authApi } from "@/features/auth-with-api";
import { configureStore } from "@reduxjs/toolkit";

export const reduxStore = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [questionsSlice.name]: questionsSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [templatesApi.reducerPath]: templatesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(templatesApi.middleware),
});
