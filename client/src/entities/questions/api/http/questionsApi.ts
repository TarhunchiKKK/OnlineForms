import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TQuestion } from "../../models";

export const questionsApi = createApi({
    reducerPath: "questions/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/questions`,
    }),

    endpoints: (builder) => ({
        findByTemplate: builder.query<TQuestion[], string>({
            query: (templateId: string) => ({
                url: `/template/${templateId}`,
            }),
            forceRefetch: () => true,
        }),
    }),
});
