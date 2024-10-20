import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserRolesOnTheAccounts, UserRolesOnTheForm, UserRolesOnTheTemplate } from "../models";
import {
    TCheckUserRoleOnTheForm,
    TCheckUserRoleOnTheTemplateDto,
    TCheckUSerRolesOnTheAccountsDto,
} from "../models/dtos";
import { TResponse } from "./types";
import { createAuthHeaders } from "@/shared/helpers";

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
                headers: createAuthHeaders(dto.authToken),
            }),
        }),

        checkRolesOnTheTemplate: builder.query<
            TResponse<UserRolesOnTheTemplate>,
            TCheckUserRoleOnTheTemplateDto
        >({
            query: (dto: TCheckUserRoleOnTheTemplateDto) => ({
                url: `/templates/${dto.templateId}`,
                headers: createAuthHeaders(dto.authToken),
            }),
        }),

        checRolesOnTheForm: builder.query<TResponse<UserRolesOnTheForm>, TCheckUserRoleOnTheForm>({
            query: (dto: TCheckUserRoleOnTheForm) => ({
                url: `/forms/${dto.formId}`,
                headers: createAuthHeaders(dto.authToken),
            }),
        }),
    }),
});
