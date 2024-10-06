import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITemplate, TCreateTemplateDto } from "../models/template";
import { TFindTemplatesQueryArgs } from "./types";

export const templatesApi = createApi({
    reducerPath: "templates/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/templates`,
    }),

    tagTypes: ["Template"],

    endpoints: (builder) => ({
        create: builder.mutation<ITemplate, TCreateTemplateDto>({
            query: (queryArgs: TCreateTemplateDto) => ({
                url: "",
                method: "POST",
                body: queryArgs,
            }),
            invalidatesTags: ["Template"],
        }),
        findAll: builder.query<ITemplate[], TFindTemplatesQueryArgs>({
            query: (queryArgs: TFindTemplatesQueryArgs) => ({
                url: "",
                params: queryArgs,
            }),
            providesTags: ["Template"],
        }),
        getCount: builder.query<number, void>({
            query: () => ({
                url: "/count",
            }),
        }),
    }),
});
