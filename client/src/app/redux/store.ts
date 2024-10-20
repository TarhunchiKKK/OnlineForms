import { answersApi } from "@/entities/answers";
import { formsApi } from "@/entities/forms";
import { questionsApi, questionsSlice } from "@/entities/questions";
import { rolesApi } from "@/entities/roles";
import { templatesApi } from "@/entities/templates";
import { usersApi } from "@/entities/users";
import { authApi } from "@/features/auth-with-api";
import { configureStore } from "@reduxjs/toolkit";

export const reduxStore = configureStore({
    reducer: {
        [questionsSlice.name]: questionsSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [rolesApi.reducerPath]: rolesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [templatesApi.reducerPath]: templatesApi.reducer,
        [questionsApi.reducerPath]: questionsApi.reducer,
        [formsApi.reducerPath]: formsApi.reducer,
        [answersApi.reducerPath]: answersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .concat(authApi.middleware)
            .concat(rolesApi.middleware)
            .concat(usersApi.middleware)
            .concat(templatesApi.middleware)
            .concat(questionsApi.middleware)
            .concat(formsApi.middleware)
            .concat(answersApi.middleware),
});
