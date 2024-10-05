import { HttpException } from "@nestjs/common";

export class UserExistException extends HttpException {
    constructor(userEmail: string) {
        super(`User with email ${userEmail} already exist.`, 400);
    }
}
