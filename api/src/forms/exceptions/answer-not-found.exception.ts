import { HttpException, HttpStatus } from "@nestjs/common";

export class AnswerNotFoundException extends HttpException {
    constructor(answerId: string) {
        super(`Answer with id=${answerId} not found.`, HttpStatus.NOT_FOUND);
    }
}
