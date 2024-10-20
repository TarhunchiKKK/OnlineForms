import { Body, Controller, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { AnswersService } from "./services/answers.service";
import { CreateFormDto } from "./dto/create-form.dto";
import { FormsService } from "./services/forms.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { TAuthorizedRequest } from "src/auth/types/request";

@Controller("forms")
export class FormsController {
    constructor(
        private readonly answersService: AnswersService,
        private readonly formsService: FormsService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    public async createForm(
        @Req() request: TAuthorizedRequest,
        @Body() createFormDto: CreateFormDto,
    ) {
        return this.formsService.create({
            ...createFormDto,
            creator: {
                id: request.user.id,
            },
        });
    }

    @Get("/user")
    @UseGuards(JwtAuthGuard)
    public async findUserForms(@Req() request: TAuthorizedRequest) {
        return this.formsService.findAllByTemplateId(request.user.id);
    }

    @Get("/answers/:formId")
    public async findFormAnswers(@Param("formId") formId: string) {
        return this.answersService.findAllByFormId(formId);
    }

    @Get(":templateId")
    public async findAllByTemplateId(@Param("templateId") templateId: string) {
        return this.formsService.findAllByTemplateId(templateId);
    }
}
