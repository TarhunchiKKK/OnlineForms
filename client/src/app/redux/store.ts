import { formsApi } from "@/entities/forms";
import { questionsApi, questionsSlice } from "@/entities/questions";
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
        [questionsApi.reducerPath]: questionsApi.reducer,
        [formsApi.reducerPath]: formsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(templatesApi.middleware)
            .concat(questionsApi.middleware)
            .concat(formsApi.middleware),
});
