import { Controller, Get, Param } from "@nestjs/common";
import { QuestionsService } from "./questions.service";

@Controller("questions")
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) {}

    @Get("/template/:templateId")
    public async getTemplateQuestions(@Param("templateId") templateId: string) {
        return await this.questionsService.findAllByTemplateId(templateId);
    }
}
