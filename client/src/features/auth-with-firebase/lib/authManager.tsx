import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "../constants";

export class FirebaseAuthManager {
    public auth: firebase.auth.Auth;

    private static instance: FirebaseAuthManager | null = null;

    private constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
    }

    public static getInstance() {
        if (FirebaseAuthManager.instance === null) {
            FirebaseAuthManager.instance = new FirebaseAuthManager();
        }
        return FirebaseAuthManager.instance;
    }
}
