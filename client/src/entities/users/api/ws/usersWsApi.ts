import { io, Socket } from "socket.io-client";

export class UsersWsApi {
    private socket: Socket;

    constructor() {
        this.socket = io(import.meta.env.VITE_SERVER_URL);
    }

    public onUserPermissionsChange(userId: string, callback: () => void) {
        this.socket.on(`userPermissionsChange${userId}`, callback);
    }
}
