import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCreateTagDto, TTag } from "../models";

export const tagsApi = createApi({
    reducerPath: "tags/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/tags`,
    }),

    tagTypes: ["Tags"],

    endpoints: (builder) => ({
        findAll: builder.query<TTag[], void>({
            query: () => ({
                url: "",
                method: "GET",
            }),
            providesTags: ["Tags"],
        }),

        create: builder.mutation<TTag, TCreateTagDto>({
            query: (dto: TCreateTagDto) => ({
                url: "",
                method: "POST",
                body: dto,
            }),
            invalidatesTags: ["Tags"],
        }),
    }),
});
