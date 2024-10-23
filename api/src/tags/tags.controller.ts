import { Body, Controller, Get, Post } from "@nestjs/common";
import { TagsService } from "./tags.service";
import { CreateTagDto } from "./dto/create-tag.dto";

@Controller("tags")
export class TagsController {
    constructor(private readonly tagsService: TagsService) {}

    @Get()
    public async findAll() {
        return await this.tagsService.findAll();
    }

    @Post()
    public async create(@Body() dto: CreateTagDto) {
        return await this.tagsService.create(dto);
    }
}
