import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    TChangeUserRoleDto,
    TChangeUserStatusDto,
    TRemoveUserDto,
    TUpdateUserDto,
    TUser,
} from "../../models";
import { createAuthHeaders } from "@/shared/helpers";
import { TSearchUsersQueryArgs } from "./types";

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
                headers: createAuthHeaders(authToken),
            }),

            providesTags: ["Users"],
        }),

        search: builder.query<TUser[], TSearchUsersQueryArgs>({
            query: (args: TSearchUsersQueryArgs) => ({
                url: "/search",
                params: {
                    ...args,
                    ids: args.ids.join(", "),
                },
            }),
        }),

        findMe: builder.query<TUser, string>({
            query: (authToken: string) => ({
                url: "/me",
                headers: createAuthHeaders(authToken),
            }),
        }),

        update: builder.mutation<void, TUpdateUserDto>({
            query: (dto: TUpdateUserDto) => ({
                url: "",
                method: "PATCH",
                body: dto.data,
                headers: createAuthHeaders(dto.authToken),
            }),
        }),

        changeStatus: builder.mutation<void, TChangeUserStatusDto>({
            query: (dto: TChangeUserStatusDto) => ({
                url: "/status",
                method: "PATCH",
                body: dto.data,
                headers: createAuthHeaders(dto.authToken),
            }),

            invalidatesTags: ["Users"],
        }),

        changeRole: builder.mutation<void, TChangeUserRoleDto>({
            query: (dto: TChangeUserRoleDto) => ({
                url: "/role",
                method: "PATCH",
                body: dto.data,
                headers: createAuthHeaders(dto.authToken),
            }),

            invalidatesTags: ["Users"],
        }),

        remove: builder.mutation<void, TRemoveUserDto>({
            query: (dto: TRemoveUserDto) => ({
                url: `/${dto.id}`,
                method: "DELETE",
                headers: createAuthHeaders(dto.authToken),
            }),

            invalidatesTags: ["Users"],
        }),
    }),
});
