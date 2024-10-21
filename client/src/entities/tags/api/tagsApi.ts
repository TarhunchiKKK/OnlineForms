import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TTag } from "../models";

export const tagsApi = createApi({
    reducerPath: "tags/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/tags`,
    }),

    endpoints: (builder) => ({
        findAll: builder.query<TTag[], void>({
            query: () => ({
                url: "",
                method: "GET",
            }),
        }),
    }),
});
