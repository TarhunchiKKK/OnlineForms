import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "http";
import { webSocketGatewayProps } from "src/shared/constants/websockets";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";
import { QuestionsService } from "./questions.service";

@WebSocketGateway(webSocketGatewayProps)
export class QuestionsGateway {
    @WebSocketServer()
    private readonly server: Server;

    constructor(private readonly questionsService: QuestionsService) {}

    @SubscribeMessage("createQuestion")
    public async handleCreateQuestion(@MessageBody() createQuestionDto: CreateQuestionDto) {
        const question = await this.questionsService.create(createQuestionDto);
        this.server.emit(`onCreateQuestion${question.template.id}`, question);
    }

    @SubscribeMessage("updateQuestion")
    public async handleUpdateQuestion(@MessageBody() updateQuestionDto: UpdateQuestionDto) {
        await this.questionsService.update(updateQuestionDto);
    }

    @SubscribeMessage("removeQuestion")
    public async handleRemoveQuestion(@MessageBody() questionId: string) {
        await this.questionsService.remove(questionId);
    }
}
