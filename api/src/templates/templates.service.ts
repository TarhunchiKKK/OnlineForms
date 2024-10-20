import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTemplateDto } from "./dto/create-template.dto";
import { UpdateTemplateDto } from "./dto/update-template.dto";
import { Template } from "./entities/template.entity";
import { TemplateNotFoundException } from "./exceptions/template-not-found.exception";

@Injectable()
export class TemplatesService {
    constructor(
        @InjectRepository(Template) private readonly templatesRepository: Repository<Template>,
    ) {}

    public async create(createTemplateDto: CreateTemplateDto) {
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

    public async findAllByUserId(userId: string) {
        return await this.templatesRepository.find({
            where: {
                creator: {
                    id: userId,
                },
            },
            relations: {
                creator: true,
            },
        });
    }

    public async findOneById(templateId: string) {
        return await this.templatesRepository.findOne({
            where: {
                id: templateId,
            },
            relations: {
                creator: true,
                questions: true,
            },
        });
    }

    public async update(updateTemplateDto: UpdateTemplateDto) {
        const template = await this.templatesRepository.findOne({
            where: {
                id: updateTemplateDto.id,
            },
        });

        if (!template) {
            throw new TemplateNotFoundException(updateTemplateDto.id);
        }

        return await this.templatesRepository.save(updateTemplateDto);
    }

    public async getCount() {
        return await this.templatesRepository.count();
    }
}
