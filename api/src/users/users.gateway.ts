import { OnEvent } from "@nestjs/event-emitter";
import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "http";
import { webSocketGatewayProps } from "src/shared/constants/websockets";
import { UserPermissionsChangeEvent } from "./events/user-permissions-change.event";

@WebSocketGateway(webSocketGatewayProps)
export class UsersGateway {
    @WebSocketServer()
    private readonly server: Server;

    @OnEvent(UserPermissionsChangeEvent.EventName)
    public handleUserPermissionsChange(event: UserPermissionsChangeEvent) {
        this.server.emit(`userPermissionsChange${event.userId}`);
    }
}