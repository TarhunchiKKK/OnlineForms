import { HttpException, HttpStatus } from "@nestjs/common";

export class QuestionNotFoundException extends HttpException {
    constructor(questionId: string) {
        super(`Question with id ${questionId} not found`, HttpStatus.NOT_FOUND);
    }
}
