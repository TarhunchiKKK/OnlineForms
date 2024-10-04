import { HttpException } from "@nestjs/common";

export class UserNotFounException extends HttpException {
    constructor() {
        super("User not found.", 404);
    }
}
