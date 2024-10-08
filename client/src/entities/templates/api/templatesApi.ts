import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITemplate } from "../models/template";
import { TCreateTemplateQueryArgs, TFindTemplatesQueryArgs } from "./types";

export const templatesApi = createApi({
    reducerPath: "templates/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/templates`,
    }),

    tagTypes: ["Template"],

    endpoints: (builder) => ({
        create: builder.mutation<ITemplate, TCreateTemplateQueryArgs>({
            query: (queryArgs: TCreateTemplateQueryArgs) => ({
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
