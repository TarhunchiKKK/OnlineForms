import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITemplate } from "../models/template";
import { TCreateTemplateDto, TFindTemplatesQueryArgs } from "./types";
import { trimQuestionsDtos } from "@/entities/questions";

export const templatesApi = createApi({
    reducerPath: "templates/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/templates`,
    }),

    tagTypes: ["Template"],

    endpoints: (builder) => ({
        create: builder.mutation<ITemplate, TCreateTemplateDto>({
            query: (dto: TCreateTemplateDto) => ({
                url: "",
                method: "POST",
                body: {
                    ...dto.data,
                    questions: trimQuestionsDtos(dto.data.questions),
                },
                headers: {
                    Authorization: `Bearer ${dto.authToken}`,
                },
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
