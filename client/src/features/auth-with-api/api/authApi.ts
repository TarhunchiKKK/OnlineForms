import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TSignInQueryArgs, TSIgnInResponse, TSignUpQueryArgs, TSIgnUpResponse } from "../types";
import { transformSignInQueryArgs, transformSignUpQueryArgs } from "../helpers";
import { TUserProfile } from "@/entities/users/models";

export const authApi = createApi({
    reducerPath: "auth/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/auth`,
    }),

    endpoints: (builder) => ({
        signUp: builder.mutation<TSIgnUpResponse, TSignUpQueryArgs>({
            query: (args: TSignUpQueryArgs) => {
                const queryArgs = transformSignUpQueryArgs(args);
                return {
                    url: "/sign-up",
                    method: "POST",
                    body: queryArgs,
                };
            },
        }),
        signIn: builder.mutation<TSIgnInResponse, TSignInQueryArgs>({
            query: (args: TSignInQueryArgs) => {
                const queryArgs = transformSignInQueryArgs(args);
                return {
                    url: "/sign-in",
                    method: "POST",
                    body: queryArgs,
                };
            },
        }),
        getProfile: builder.query<TUserProfile, string | null>({
            query: (authToken: string | null) => ({
                url: "/profile",
                headers: {
                    Authorization: `Bearer ${authToken ?? ""}`,
                },
            }),
        }),
    }),
});
