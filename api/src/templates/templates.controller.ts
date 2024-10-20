import { Controller, Get, Post, Body, Param, Query, Req, UseGuards } from "@nestjs/common";
import { TemplatesService } from "./services/templates.service";
import { CreateTemplateDto } from "./dto/create-template.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { QuestionsService } from "./services/questions.service";
import { TAuthorizedRequest } from "src/auth/types/request";

@Controller("templates")
export class TemplatesController {
    constructor(
        private readonly templatesService: TemplatesService,
        private readonly questionsService: QuestionsService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    public async createTemplate(
        @Req() request: TAuthorizedRequest,
        @Body() createTemplateDto: Omit<CreateTemplateDto, "creator">,
    ) {
        return this.templatesService.create({
            ...createTemplateDto,
            creator: {
                id: request.user.id,
            },
        });
    }

    @Get()
    public async findAllTemplates(@Query("page") page: string, @Query("limit") limit: string) {
        return this.templatesService.findAll(+page, +limit);
    }

    @Get("/count")
    public async getTemplatesCount() {
        return this.templatesService.getCount();
    }

    @Get("/user")
    @UseGuards(JwtAuthGuard)
    public async findUserTemplates(@Req() request: TAuthorizedRequest) {
        return await this.templatesService.findAllByUserId(request.user.id);
    }

    @Get(":id")
    public async findOneTemplateById(@Param("id") templateId: string) {
        return this.templatesService.findOneById(templateId);
    }

    @Get("/:id/questions")
    public async getTemplatesQuestions(@Param("id") templateId: string) {
        return await this.questionsService.findAllByTemplateId(templateId);
    }
}
