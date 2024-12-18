import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAnswer } from "../../models";

export const answersApi = createApi({
    reducerPath: "answers/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/answers`,
    }),

    endpoints: (builder) => ({
        findAllByFormId: builder.query<TAnswer[], string>({
            query: (formId: string) => ({
                url: `/form/${formId}`,
            }),
            forceRefetch: () => true,
        }),
    }),
});
