import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformFindAllResponse, transformFindOneResponse } from "./helpers";
import { TCreateFormDto, TForm, TFullForm } from "../models";

export const formsApi = createApi({
    reducerPath: "forms/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/forms`,
    }),

    tagTypes: ["Forms"],

    endpoints: (builder) => ({
        create: builder.mutation<TForm, TCreateFormDto>({
            query: (dto: TCreateFormDto) => ({
                url: "",
                method: "POST",
                body: dto.data,
                headers: {
                    Authorization: `Bearer ${dto.authToken}`,
                },
            }),
            invalidatesTags: ["Forms"],
        }),

        findUserForms: builder.query<TForm[], string>({
            query: (authToken: string) => ({
                url: "/user",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            }),
            transformResponse: transformFindAllResponse,
            providesTags: ["Forms"],
        }),

        findAllByTemplateId: builder.query<TForm[], string>({
            query: (templateId: string) => ({
                url: `/${templateId}`,
            }),
            transformResponse: transformFindAllResponse,
            providesTags: ["Forms"],
        }),

        findOne: builder.query<TFullForm, string>({
            query: (id: string) => ({
                url: `${id}`,
            }),
            transformResponse: transformFindOneResponse,
        }),
    }),
});
