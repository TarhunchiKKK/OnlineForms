import { Controller, Get, Post, Body, Param, Query, Req, UseGuards } from "@nestjs/common";
import { TemplatesService } from "./services/templates.service";
import { CreateTemplateDto } from "./dto/create-template.dto";
import { FilledTemplatesService } from "./services/filled-templates.service";
import { CreateFilledTemplateDto } from "./dto/create-filled-template.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@Controller("templates")
export class TemplatesController {
    constructor(
        private readonly templatesService: TemplatesService,
        private readonly filledTemplatesService: FilledTemplatesService,
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

    @Post("/filled")
    public async createFilledTemplate(@Body() createFilledTemplateDto: CreateFilledTemplateDto) {
        return this.filledTemplatesService.create(createFilledTemplateDto);
    }

    @Get("/filled")
    public async findAllFilledTemplates(@Param("templateId") templateId: string) {
        return this.filledTemplatesService.findAll(templateId);
    }

    @Get("/filled/:id")
    public async findOneFilledTemplate(@Param("id") filledTemplateId: string) {
        return this.filledTemplatesService.findOne(filledTemplateId);
    }
}
