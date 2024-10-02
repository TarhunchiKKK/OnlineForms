import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { AuthManager } from "../lib";

export function useAuthProviders() {
    function getAuthHandler(provider: firebase.auth.AuthProvider) {
        return () => {
            const auth = AuthManager.getInstance().auth;

            auth.signInWithPopup(provider)
                .then((result) => {
                    const credential = result.credential as firebase.auth.AuthCredential & {
                        accessToken: string;
                    };
                    console.log("Credential:");
                    console.log(credential);

                    const accessToken = credential!.accessToken as string;
                    console.log("Access Token: ", accessToken);

                    const user = result.user;
                    console.log("User:");
                    console.log(user);
                })
                .catch(console.log);
        };
    }

    return {
        getAuthHandler,
    };
}
