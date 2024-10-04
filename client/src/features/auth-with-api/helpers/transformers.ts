import { TSignInQueryArgs, TSignUpQueryArgs } from "../types";

export function transformSignUpQueryArgs(queryArgs: TSignUpQueryArgs): TSignUpQueryArgs {
    return {
        username: queryArgs.username || null,
        email: queryArgs.email,
        password: queryArgs.password || null,
    };
}

export function transformSignInQueryArgs(queryArgs: TSignInQueryArgs): TSignInQueryArgs {
    return {
        email: queryArgs.email,
        password: queryArgs.password || null,
    };
}
