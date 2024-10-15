import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";
import { TemplatesService } from "./services/templates.service";
import { QuestionsService } from "./services/questions.service";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto, UpdateQuestionDtoSchema } from "./dto/update-question.dto";
import { UpdateTemplateDto } from "./dto/update-template.dto";
import { ZodValidationPipe } from "src/shared/pipes/zod-validation.pipe";

@WebSocketGateway({
    cors: {
        origin: "*",
    },
})
export class TemplatesGateway {
    @WebSocketServer()
    private readonly server: Server;

    constructor(
        private readonly templatesService: TemplatesService,
        private readonly questionsService: QuestionsService,
    ) {}

    @SubscribeMessage("createQuestion")
    public async handleCreateQuestion(@MessageBody() createQuestionDto: CreateQuestionDto) {
        const question = await this.questionsService.create(createQuestionDto);
        this.server.emit("onCreateQuestion", question);
    }

    @SubscribeMessage("updateQuestion")
    public async handleUpdateQuestion(
        @MessageBody(new ZodValidationPipe(UpdateQuestionDtoSchema))
        updateQuestionDto: UpdateQuestionDto,
    ) {
        console.count("updateQuestion");

        await this.questionsService.update(updateQuestionDto);
    }

    @SubscribeMessage("removeQuestion")
    public async handleRemoveQuestion(@MessageBody() questionId: string) {
        await this.questionsService.remove(questionId);
    }

    @SubscribeMessage("updateTemplate")
    public async handleUpdateTemplate(@MessageBody() updateTemplateDto: UpdateTemplateDto) {
        console.count("updateTemplate");
        await this.templatesService.update(updateTemplateDto);
    }
}
