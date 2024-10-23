import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TComment, TCreateCommentDto, TFullComment } from "../../models";
import { transformFindManyResponse } from "./helpers";
import { createAuthHeaders } from "@/shared/helpers";

export const commentsApi = createApi({
    reducerPath: "comments",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/comments`,
    }),

    tagTypes: ["Comments"],

    endpoints: (builder) => ({
        findTemplateComments: builder.query<TComment[], string>({
            query: (templateId: string) => ({
                url: `template/${templateId}`,
            }),
            transformResponse: transformFindManyResponse,
            providesTags: ["Comments"],
        }),

        create: builder.mutation<TFullComment, TCreateCommentDto>({
            query: (dto: TCreateCommentDto) => ({
                url: "",
                method: "POST",
                body: dto.data,
                headers: createAuthHeaders(dto.authToken),
            }),
            invalidatesTags: ["Comments"],
        }),
    }),
});
