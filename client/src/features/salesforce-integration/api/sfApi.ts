import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCreateSFAccountDto, TCreateSFContactDto, TSFAccount, TSFContact } from "../types";
import { createAuthHeaders } from "@/shared/helpers";

export const sfApi = createApi({
    reducerPath: "sfApi",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SF_INSTANCE_URL}/services/data/v62.0/sobjects`,
    }),

    endpoints: (builder) => ({
        creaetAccount: builder.mutation<TSFAccount, TCreateSFAccountDto>({
            query: (dto: TCreateSFAccountDto) => ({
                url: "/Account/",
                method: "POST",
                body: dto,
                headers: createAuthHeaders(import.meta.env.VITE_SF_ACCESS_TOKEN),
            }),
        }),

        createContact: builder.mutation<TSFContact, TCreateSFContactDto>({
            query: (dto: TCreateSFContactDto) => ({
                url: "/Contact/",
                method: "POST",
                body: dto,
                headers: createAuthHeaders(import.meta.env.VITE_SF_ACCESS_TOKEN),
            }),
        }),
    }),
});
