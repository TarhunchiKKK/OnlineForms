import { HttpException, HttpStatus } from "@nestjs/common";

export class TemplateExistException extends HttpException {
    constructor(templateTite: string) {
        super(`Template with title '${templateTite}' already exist.`, HttpStatus.BAD_REQUEST);
    }
}
