import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { webSocketGatewayProps } from "src/shared/constants/websockets";
import { AnswersService } from "./services/answers.service";
import { UpdateAnswerDto } from "./dto/update-answer.dto";

@WebSocketGateway(webSocketGatewayProps)
export class FormsGateway {
    constructor(private readonly answersService: AnswersService) {}

    @SubscribeMessage("updateAnswer")
    public async handleUpdateAnswer(@MessageBody() updateAnswerDto: UpdateAnswerDto) {
        await this.answersService.update(updateAnswerDto);
    }
}
