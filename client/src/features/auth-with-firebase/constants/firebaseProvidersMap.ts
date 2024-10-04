import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { FirebaseAuthProviders } from "../types";

export const firebaseProdvidersMap: Record<FirebaseAuthProviders, firebase.auth.AuthProvider> = {
    [FirebaseAuthProviders.Google]: new firebase.auth.GoogleAuthProvider(),
};
