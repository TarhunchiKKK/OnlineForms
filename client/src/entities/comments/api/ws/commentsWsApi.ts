import { io, Socket } from "socket.io-client";

export class CommentsWsApi {
    private socket: Socket;

    constructor() {
        this.socket = io(import.meta.env.VITE_SERVER_URL);
    }

    public onCommenCreated(templateId: string, callback: () => void) {
        this.socket.on(`commentCreated${templateId}`, callback);
    }
}
