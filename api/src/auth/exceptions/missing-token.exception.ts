import { HttpException, HttpStatus } from "@nestjs/common";

export class MissingAuthTokenException extends HttpException {
    constructor() {
        super("Missing auth token.", HttpStatus.UNAUTHORIZED);
    }
}
