import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { AuthManager } from "../lib";

export async function authWithFirebase(provider: firebase.auth.AuthProvider) {
    try {
        const auth = AuthManager.getInstance().auth;

        const authResponse = await auth.signInWithPopup(provider);

        if (!authResponse.user) {
            return null;
        }

        return {
            username: authResponse.user.displayName,
            email: authResponse.user.email!,
        };
    } catch (error: unknown) {
        console.error(error);
        return null;
    }
}
