import { HttpException } from "@nestjs/common";

export class IncorrectPasswordException extends HttpException {
    constructor() {
        super("Incorrect password.", 401);
    }
}
