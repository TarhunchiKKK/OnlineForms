import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserRolesOnTheAccounts, UserRolesOnTheTemplate } from "../models";
import { TCheckUserRoleOnTheTemplateDto, TCheckUSerRolesOnTheAccountsDto } from "../models/dtos";
import { TResponse } from "./types";

export const rolesApi = createApi({
    reducerPath: "roles/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/roles`,
    }),

    endpoints: (builder) => ({
        checkRolesOnTheAccount: builder.query<
            TResponse<UserRolesOnTheAccounts>,
            TCheckUSerRolesOnTheAccountsDto
        >({
            query: (dto: TCheckUSerRolesOnTheAccountsDto) => ({
                url: `/accounts/${dto.accountId}`,
                headers: {
                    Authorization: `Bearer ${dto.authToken}`,
                },
            }),
        }),

        checkRolesOnTheTemplate: builder.query<
            TResponse<UserRolesOnTheTemplate>,
            TCheckUserRoleOnTheTemplateDto
        >({
            query: (dto: TCheckUserRoleOnTheTemplateDto) => ({
                url: `/templates/${dto.templateId}`,
                headers: {
                    Authorization: "Bearer ${dto.authToken}",
                },
            }),
        }),
    }),
});
