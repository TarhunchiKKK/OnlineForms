import { Injectable } from "@nestjs/common";
import { CreateTemplateDto } from "./dto/create-template.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Template } from "./entities/template.entity";
import { Repository } from "typeorm";
import { TemplateExistException } from "./exceptions/template-exist.exception";

@Injectable()
export class TemplatesService {
    constructor(
        @InjectRepository(Template) private readonly templatesRepository: Repository<Template>,
    ) {}

    public async create(createTemplateDto: CreateTemplateDto) {
        const exitsTemplate = await this.templatesRepository.findOne({
            where: {
                title: createTemplateDto.title,
            },
        });

        if (exitsTemplate) {
            throw new TemplateExistException(createTemplateDto.title);
        }

        return await this.templatesRepository.save(createTemplateDto);
    }

    public async findAll(page: number, limit: number) {
        return await this.templatesRepository.find({
            skip: (page - 1) * limit,
            take: limit,
            relations: {
                creator: true,
            },
        });
    }

    public async findOne(templateId: string) {
        return await this.templatesRepository.findOne({
            where: {
                id: templateId,
            },
        });
    }

    public async getCount() {
        return await this.templatesRepository.count();
    }
}
