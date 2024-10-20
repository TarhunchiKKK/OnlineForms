import { Controller, Get, Param } from "@nestjs/common";
import { AnswersService } from "./answers.service";

@Controller("answers")
export class AnswersController {
    constructor(private readonly answersService: AnswersService) {}

    @Get("/form/:formId")
    public async findFormAnswers(@Param("formId") formId: string) {
        return this.answersService.findAllByFormId(formId);
    }
}
