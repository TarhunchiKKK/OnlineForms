import { OnEvent } from "@nestjs/event-emitter";
import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "http";
import { webSocketGatewayProps } from "src/shared/constants/websockets";
import { CommentCreatedEvent } from "./events/comment-created.event";

@WebSocketGateway(webSocketGatewayProps)
export class CommentsGateway {
    @WebSocketServer()
    private readonly server: Server;

    @OnEvent(CommentCreatedEvent.EventName)
    public handleCommentCreated(event: CommentCreatedEvent) {
        this.server.emit(`commentCreated${event.templateId}`, event);
    }
}
