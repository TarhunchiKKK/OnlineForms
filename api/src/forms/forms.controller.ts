import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AnswersService } from "./services/answers.service";
import { CreateFormDto } from "./dto/create-form.dto";
import { FormsService } from "./services/forms.service";

@Controller("forms")
export class FormsController {
    constructor(
        private readonly answersService: AnswersService,
        private readonly formsService: FormsService,
    ) {}

    @Post()
    public async createForm(@Body() createFormDto: CreateFormDto) {
        return this.formsService.create(createFormDto);
    }

    @Get("/answers/:id")
    public async findFormAnswers(@Param("id") formId: string) {
        return this.answersService.findAllByFormId(formId);
    }

    @Get(":id")
    public async findAllByTemplateId(@Param("templateId") templateId: string) {
        return this.formsService.findAllByTemplateId(templateId);
    }
}
