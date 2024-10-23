import { CommentsWsApi } from "@/entities/comments";
import { TCallback, TCallbacksState } from "./types";

export class CommentsObserver {
    private commentsWsApi: CommentsWsApi;

    private callbacks: TCallbacksState = [];

    constructor(templateId: string) {
        this.commentsWsApi = new CommentsWsApi();

        this.commentsWsApi.onCommenCreated(templateId, () => {
            this.executeCallbacks();
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
