import { GoogleIcon } from "../../assets";
import { FirebaseAuthProviders } from "../../types";

type TAuthProvider = {
    icon: string;
    provider: FirebaseAuthProviders;
};

export const authProviders: TAuthProvider[] = [
    {
        icon: GoogleIcon,
        provider: FirebaseAuthProviders.Google,
    },
];
