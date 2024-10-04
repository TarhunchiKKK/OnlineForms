import { FirebaseAuthProviders, IGoogleProviderData } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TDataTransformer = (_: any) => { username: string | null; email: string };

export const dataTransformersMap: Record<FirebaseAuthProviders, TDataTransformer> = {
    [FirebaseAuthProviders.Google]: (data: IGoogleProviderData) => {
        return {
            username: data.displayName,
            email: data.email!,
        };
    },
};
