import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "../constants";

export class AuthManager {
    public auth: firebase.auth.Auth;

    private static instance: AuthManager | null = null;

    private constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
    }

    public static getInstance() {
        if (AuthManager.instance === null) {
            AuthManager.instance = new AuthManager();
        }
        return AuthManager.instance;
    }
}
