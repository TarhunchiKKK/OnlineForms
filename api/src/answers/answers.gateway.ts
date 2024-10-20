import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { webSocketGatewayProps } from "src/shared/constants/websockets";
import { UpdateAnswerDto } from "../answers/dto/update-answer.dto";
import { AnswersService } from "./answers.service";

@WebSocketGateway(webSocketGatewayProps)
export class AnswersGateway {
    constructor(private readonly answersService: AnswersService) {}

    @SubscribeMessage("updateAnswer")
    public async handleUpdateAnswer(@MessageBody() updateAnswerDto: UpdateAnswerDto) {
        await this.answersService.update(updateAnswerDto);
    }
}
