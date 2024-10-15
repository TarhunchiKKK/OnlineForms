import { io, Socket } from "socket.io-client";
import { TCreateQuestionDto, TQuestion, TUpdateQuestionDto } from "../../models";
import { parseUpdateQuestionDto } from "./helpers";
import { updateQuestionDelay } from "./constants";

export class QuestionsWsApi {
    private socket: Socket;

    private updateTimer: NodeJS.Timer | undefined = undefined;

    constructor() {
        this.socket = io(import.meta.env.VITE_SERVER_URL);
    }

    public createQuestion(dto: TCreateQuestionDto) {
        this.socket.emit("createQuestion", dto);
    }

    public updateQuestion(dto: TUpdateQuestionDto) {
        if (this.updateTimer) {
            clearTimeout(+this.updateTimer);
        }

        this.updateTimer = setTimeout(() => {
            const parsedDto = parseUpdateQuestionDto(dto);
            this.socket.emit("updateQuestion", parsedDto);
        }, updateQuestionDelay);
    }

    public removeQuestion(questionId: string) {
        this.socket.emit("removeQuestion", questionId);
    }

    public onCreateQuestion(callback: (question: TQuestion) => void) {
        this.socket.on("onCreateQuestion", callback);
    }
}

export class QuestionsWsApiProvider {
    private static instance: QuestionsWsApi | null = null;

    public static getInstance() {
        if (!QuestionsWsApiProvider.instance) {
            QuestionsWsApiProvider.instance = new QuestionsWsApi();
        }

        return QuestionsWsApiProvider.instance;
    }
}
