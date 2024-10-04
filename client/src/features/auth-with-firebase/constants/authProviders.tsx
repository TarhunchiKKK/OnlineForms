import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { GoogleIcon } from "../assets";

type TAuthProvider = {
    icon: string;
    provider: firebase.auth.AuthProvider;
};

export const authProviders: TAuthProvider[] = [
    {
        icon: GoogleIcon,
        provider: new firebase.auth.GoogleAuthProvider(),
    },
];
