import { FirebaseAuthManager } from "../lib";
import { FirebaseAuthProviders } from "../types";
import { dataTransformersMap, firebaseProdvidersMap } from "../constants";

export async function authWithFirebase(providerName: FirebaseAuthProviders) {
    try {
        const provider = firebaseProdvidersMap[providerName];

        const auth = FirebaseAuthManager.getInstance().auth;

        const authResponse = await auth.signInWithPopup(provider);

        if (!authResponse.user) {
            return null;
        }

        return dataTransformersMap[providerName](authResponse.user);
    } catch (error: unknown) {
        console.error(error);
        return null;
    }
}
