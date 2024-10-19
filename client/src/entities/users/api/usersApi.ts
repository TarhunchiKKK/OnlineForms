import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUser } from "../models";

export const usersApi = createApi({
    reducerPath: "users/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/users`,
    }),

    endpoints: (builder) => ({
        findAll: builder.query<TUser[], string>({
            query: (authToken: string) => ({
                url: "",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            }),
        }),
    }),
});
