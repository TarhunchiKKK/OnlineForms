import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";
import { TemplatesService } from "./templates.service";
import { UpdateTemplateDto } from "./dto/update-template.dto";
import { webSocketGatewaySettings } from "src/shared/constants/websockets";

@WebSocketGateway(webSocketGatewaySettings)
export class TemplatesGateway {
    @WebSocketServer()
    private readonly server: Server;

    constructor(private readonly templatesService: TemplatesService) {}

    @SubscribeMessage("updateTemplate")
    public async handleUpdateTemplate(@MessageBody() updateTemplateDto: UpdateTemplateDto) {
        await this.templatesService.update(updateTemplateDto);
    }
}
