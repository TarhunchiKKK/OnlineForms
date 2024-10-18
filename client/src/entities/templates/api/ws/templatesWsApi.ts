import { io, Socket } from "socket.io-client";
import { updateTemplateDelay } from "./constants";
import { TUpdateTemplateDto } from "../../models";

class TemplatesWsApi {
    private socket: Socket;

    private updateTimer: NodeJS.Timer | undefined = undefined;

    constructor() {
        this.socket = io(import.meta.env.VITE_SERVER_URL);
    }

    public updateTemplate(dto: TUpdateTemplateDto) {
        if (this.updateTimer) {
            clearTimeout(+this.updateTimer);
        }

        this.updateTimer = setTimeout(() => {
            this.socket.emit("updateTemplate", {
                ...dto.data,
                description: JSON.stringify(dto.data.description),
            });
        }, updateTemplateDelay);
    }
}

export class TemplatesWsApiProvider {
    private static instance: TemplatesWsApi | null = null;

    public static getInstance() {
        if (!TemplatesWsApiProvider.instance) {
            TemplatesWsApiProvider.instance = new TemplatesWsApi();
        }

        return TemplatesWsApiProvider.instance;
    }
}
