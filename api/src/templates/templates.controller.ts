import { Controller, Get, Post, Body, Param, Query } from "@nestjs/common";
import { TemplatesService } from "./templates.service";
import { CreateTemplateDto } from "./dto/create-template.dto";

@Controller("templates")
export class TemplatesController {
    constructor(private readonly templatesService: TemplatesService) {}

    @Post()
    public async create(@Body() createTemplateDto: CreateTemplateDto) {
        return this.templatesService.create(createTemplateDto);
    }

    @Get()
    public async findAll(@Query("page") page: string, @Query("limit") limit: string) {
        return this.templatesService.findAll(+page, +limit);
    }

    @Get("/count")
    public async getCount() {
        return this.templatesService.getCount();
    }

    @Get(":id")
    public async findOne(@Param("id") templateId: string) {
        return this.templatesService.findOne(templateId);
    }
}
