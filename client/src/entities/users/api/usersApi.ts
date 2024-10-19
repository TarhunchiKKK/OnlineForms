import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TChangeUserRoleDto, TChangeUserStatusDto, TUser } from "../models";

export const usersApi = createApi({
    reducerPath: "users/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/users`,
    }),

    tagTypes: ["Users"],

    endpoints: (builder) => ({
        findAll: builder.query<TUser[], string>({
            query: (authToken: string) => ({
                url: "",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            }),

            providesTags: ["Users"],
        }),

        changeStatus: builder.mutation<void, TChangeUserStatusDto>({
            query: (dto: TChangeUserStatusDto) => ({
                url: "/status",
                method: "PATCH",
                body: dto.data,
                headers: {
                    Authorization: `Bearer ${dto.authToken}`,
                },
            }),

            invalidatesTags: ["Users"],
        }),

        changeRole: builder.mutation<void, TChangeUserRoleDto>({
            query: (dto: TChangeUserRoleDto) => ({
                url: "/role",
                method: "PATCH",
                body: dto.data,
                headers: {
                    Authorization: `Bearer ${dto.authToken}`,
                },
            }),

            invalidatesTags: ["Users"],
        }),
    }),
});
