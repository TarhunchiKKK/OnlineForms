import { Controller, Get, Post, Body, Param, Req, UseGuards, Query, Patch } from "@nestjs/common";
import { CreateTemplateDto } from "./dto/create-template.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { TAuthorizedRequest } from "src/auth/types/request";
import { TemplatesService } from "./templates.service";
import { parseArrayParam } from "src/shared/helpers/http";

@Controller("templates")
export class TemplatesController {
    constructor(private readonly templatesService: TemplatesService) {}

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
    public async findAllTemplates(@Query("tagIds") tagIds: string) {
        const parsedTagIds = parseArrayParam(tagIds, ", ");
        return this.templatesService.findAll(parsedTagIds);
    }

    @Get("/popular")
    public async findMostPopularTemplates(@Query("count") count: string) {
        return this.templatesService.findMostPopular(+count);
    }

    @Get("/user")
    @UseGuards(JwtAuthGuard)
    public async findUserTemplates(@Req() request: TAuthorizedRequest) {
        return await this.templatesService.findAllByUserId(request.user.id);
    }

    @Get("/likes/:templateId")
    @UseGuards(JwtAuthGuard)
    public async checkIsLiked(
        @Req() request: TAuthorizedRequest,
        @Param("templateId") templateId: string,
    ) {
        const liked = await this.templatesService.checkIsLiked(templateId, request.user.id);
        return { liked };
    }

    @Patch("/likes/:templateId")
    @UseGuards(JwtAuthGuard)
    public async likeTemplate(
        @Req() request: TAuthorizedRequest,
        @Param("templateId") templateId: string,
    ) {
        return await this.templatesService.likeTemplate({
            template: {
                id: templateId,
            },
            user: {
                id: request.user.id,
            },
        });
    }

    @Get(":id")
    public async findOneTemplateById(@Param("id") templateId: string) {
        return this.templatesService.findOneById(templateId);
    }
}
