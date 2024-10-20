import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TFindTemplatesQueryArgs } from "./types";
import { defaultTemplate } from "../../constants";
import { TFullTemplate, TTemplate, TCreateTemplateDto } from "../../models";
import {
    transformCreateResponse,
    transformFindAllResponse,
    transformFindOneResponse,
} from "../ws/helpers";

export const templatesApi = createApi({
    reducerPath: "templates/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/templates`,
    }),

    tagTypes: ["Template"],

    endpoints: (builder) => ({
        createDefault: builder.mutation<TTemplate, string>({
            query: (authToken: string) => ({
                url: "",
                method: "POST",
                body: defaultTemplate,
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            }),
            transformResponse: transformCreateResponse,
            invalidatesTags: ["Template"],
        }),

        create: builder.mutation<TTemplate, TCreateTemplateDto>({
            query: (dto: TCreateTemplateDto) => ({
                url: "",
                method: "POST",
                body: dto.data,
                headers: {
                    Authorization: `Bearer ${dto.authToken}`,
                },
            }),
            transformResponse: transformCreateResponse,
            invalidatesTags: ["Template"],
        }),

        findAll: builder.query<TTemplate[], TFindTemplatesQueryArgs>({
            query: (queryArgs: TFindTemplatesQueryArgs) => ({
                url: "",
                params: queryArgs,
            }),
            transformResponse: transformFindAllResponse,
            providesTags: ["Template"],
        }),

        findUserTemplates: builder.query<TTemplate[], string>({
            query: (authToken: string) => ({
                url: "/user",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            }),
            providesTags: ["Template"],
        }),

        findOne: builder.query<TFullTemplate, string>({
            query: (id: string) => ({
                url: `/${id}`,
            }),
            transformResponse: transformFindOneResponse,
        }),

        getCount: builder.query<number, void>({
            query: () => ({
                url: "/count",
            }),
        }),
    }),
});
