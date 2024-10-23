import { Body, Controller, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { CreateFormDto } from "./dto/create-form.dto";
import { FormsService } from "./forms.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { TAuthorizedRequest } from "src/auth/types/request";

@Controller("forms")
export class FormsController {
    constructor(private readonly formsService: FormsService) {}

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
        return this.formsService.findAllByUserId(request.user.id, request.query?.templateId);
    }

    @Get("/template/:templateId")
    public async findAllByTemplateId(@Param("templateId") templateId: string) {
        return this.formsService.findAllByTemplateId(templateId);
    }

    @Get(":formId")
    public async findOne(@Param("formId") formId: string) {
        return await this.formsService.findOne(formId);
    }
}
