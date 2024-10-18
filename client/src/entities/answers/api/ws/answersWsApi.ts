import { io, Socket } from "socket.io-client";
import { TUpdateAnswerDto } from "../../models/dtos";
import { updateAnswerDelay } from "./constants";

export class AnswersWsApi {
    private socket: Socket;

    private updateTimer: NodeJS.Timer | undefined = undefined;

    constructor() {
        this.socket = io(import.meta.env.VITE_SERVER_URL);
    }

    public updateAnswer(dto: TUpdateAnswerDto) {
        if (this.updateTimer) {
            clearTimeout(+this.updateTimer);
        }

        this.updateTimer = setTimeout(() => {
            this.socket.emit("updateAnswer", dto);
        }, updateAnswerDelay);
    }
}

export class AnswersWsApiProvider {
    private static instance: AnswersWsApi | null = null;

    public static getInstance() {
        if (!AnswersWsApiProvider.instance) {
            AnswersWsApiProvider.instance = new AnswersWsApi();
        }

        return AnswersWsApiProvider.instance;
    }
}
