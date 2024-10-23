import { answersApi } from "@/entities/answers";
import { formsApi } from "@/entities/forms";
import { questionsApi, questionsSlice } from "@/entities/questions";
import { rolesApi } from "@/entities/roles";
import { tagsApi } from "@/entities/tags";
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
        [tagsApi.reducerPath]: tagsApi.reducer,
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
            .concat(tagsApi.middleware)
            .concat(questionsApi.middleware)
            .concat(formsApi.middleware)
            .concat(answersApi.middleware),
});
