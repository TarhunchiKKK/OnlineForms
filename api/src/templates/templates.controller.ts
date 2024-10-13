import { Controller, Get, Post, Body, Param, Query, Req, UseGuards, Patch } from "@nestjs/common";
import { TemplatesService } from "./services/templates.service";
import { CreateTemplateDto } from "./dto/create-template.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { QuestionsService } from "./services/questions.service";
import { UpdateTemplateDto } from "./dto/update-template.dto";

@Controller("templates")
export class TemplatesController {
    constructor(
        private readonly templatesService: TemplatesService,
        private readonly questionsService: QuestionsService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    public async createTemplate(
        @Req() request,
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

    @Get(":id")
    public async findOneTemplate(@Param("id") templateId: string) {
        return this.templatesService.findOne(templateId);
    }

    @Patch()
    public async updatetemplate(@Body() updateTemplateDto: UpdateTemplateDto) {
        return await this.templatesService.updateOne(updateTemplateDto);
    }
}
