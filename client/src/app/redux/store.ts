import { answersApi } from "@/entities/answers";
import { formsApi } from "@/entities/forms";
import { questionsApi, questionsSlice } from "@/entities/questions";
import { templatesApi } from "@/entities/templates";
import { usersApi, userSlice } from "@/entities/users";
import { authApi } from "@/features/auth-with-api";
import { configureStore } from "@reduxjs/toolkit";

export const reduxStore = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [questionsSlice.name]: questionsSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [templatesApi.reducerPath]: templatesApi.reducer,
        [questionsApi.reducerPath]: questionsApi.reducer,
        [formsApi.reducerPath]: formsApi.reducer,
        [answersApi.reducerPath]: answersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .concat(authApi.middleware)
            .concat(usersApi.middleware)
            .concat(templatesApi.middleware)
            .concat(questionsApi.middleware)
            .concat(formsApi.middleware)
            .concat(answersApi.middleware),
});
