import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformFindAllResponse, transformFindOneResponse } from "./helpers";
import { TCreateFormDto, TForm, TFullForm } from "../models";

export const formsApi = createApi({
    reducerPath: "forms/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/answers/filled`,
    }),

    tagTypes: ["FilledTemplate"],

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
            invalidatesTags: ["FilledTemplate"],
        }),
        findAll: builder.query<TForm[], void>({
            query: () => ({
                url: "",
            }),
            transformResponse: transformFindAllResponse,
            providesTags: ["FilledTemplate"],
        }),
        findOne: builder.query<TFullForm, string>({
            query: (id: string) => ({
                url: `${id}`,
            }),
            transformResponse: transformFindOneResponse,
        }),
    }),
});
