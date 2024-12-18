import { UsersWsApi } from "@/entities/users";
import { TCallback, TCallbacksState } from "./types";
import { refreshAuthToken } from "../../api";

export class UserPermissionsObserver {
    private usersWsApi: UsersWsApi;

    private callbacks: TCallbacksState = [];

    constructor(userId: string) {
        this.usersWsApi = new UsersWsApi();

        this.usersWsApi.onUserPermissionsChange(userId, () => {
            refreshAuthToken().then(() => this.executeCallbacks());
        });
    }

    private executeCallbacks() {
        this.callbacks.forEach((callback) => {
            if (callback) {
                callback();
            }
        });
    }

    public subscribe(callback: TCallback) {
        const index = this.callbacks.length;

        this.callbacks.push(callback);

        return () => {
            this.callbacks[index] = null;
        };
    }
}
