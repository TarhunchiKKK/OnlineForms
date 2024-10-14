import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { trimCreateQuestionDtos, trimUpdateQuestionDtos } from "@/entities/questions";
import { TFullTemplate, TTemplate, TCreateTemplateDto, TUpdateTemplateDto } from "../models";
import { transformFindAllResponse, transformFindOneResponse } from "./helpers";
import { TFindTemplatesQueryArgs } from "./types";

export const templatesApi = createApi({
    reducerPath: "templates/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/templates`,
    }),

    tagTypes: ["Template"],

    endpoints: (builder) => ({
        create: builder.mutation<TTemplate, TCreateTemplateDto>({
            query: (dto: TCreateTemplateDto) => ({
                url: "",
                method: "POST",
                body: {
                    ...dto.data,
                    questions: trimCreateQuestionDtos(dto.data.questions),
                },
                headers: {
                    Authorization: `Bearer ${dto.authToken}`,
                },
            }),
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

        update: builder.mutation<void, TUpdateTemplateDto>({
            query: (dto: TUpdateTemplateDto) => ({
                url: "",
                method: "PATCH",
                body: {
                    ...dto.data,
                    questions: trimUpdateQuestionDtos(dto.data.questions),
                },
            }),
        }),
    }),
});
