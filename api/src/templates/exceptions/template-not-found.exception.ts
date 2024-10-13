import { HttpException, HttpStatus } from "@nestjs/common";

export class TemplateNotFoundException extends HttpException {
    constructor(templateId: string) {
        super(`Template with id ${templateId} not found`, HttpStatus.NOT_FOUND);
    }
}
