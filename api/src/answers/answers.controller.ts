import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AnswersService } from "./services/answers.service";
import { FilledTemplatesService } from "./services/filled-templates.service";
import { CreateFilledTemplateDto } from "./dto/create-filled-template.dto";

@Controller("answers")
export class AnswersController {
    constructor(
        private readonly answersService: AnswersService,
        private readonly filledTemplatesService: FilledTemplatesService,
    ) {}

    @Post("/templates")
    public async createFilledTemplate(@Body() createFilledTemplateDto: CreateFilledTemplateDto) {
        return this.filledTemplatesService.create(createFilledTemplateDto);
    }

    @Get("/templates")
    public async findAllFilledTemplates(@Param("templateId") templateId: string) {
        return this.filledTemplatesService.findAll(templateId);
    }

    @Get("/templates/:id")
    public async findOneFilledTemplate(@Param("id") filledTemplateId: string) {
        return this.filledTemplatesService.findOne(filledTemplateId);
    }
}
