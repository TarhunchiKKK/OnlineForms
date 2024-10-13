import { Injectable } from "@nestjs/common";
import { CreateTemplateDto } from "../dto/create-template.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Template } from "../entities/template.entity";
import { Repository } from "typeorm";
import { TemplateExistException } from "../exceptions/template-exist.exception";
import { QuestionsService } from "src/templates/services/questions.service";
import { UpdateTemplateDto } from "../dto/update-template.dto";
import { TemplateNotFoundException } from "../exceptions/template-not-found.exception";

@Injectable()
export class TemplatesService {
    constructor(
        @InjectRepository(Template) private readonly templatesRepository: Repository<Template>,

        private readonly questionsService: QuestionsService,
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

        const template = await this.templatesRepository.save({
            title: createTemplateDto.title,
            description: createTemplateDto.description,
            topic: createTemplateDto.topic,
            creator: createTemplateDto.creator,
        });

        await this.questionsService.createMany(template.id, createTemplateDto.questions);

        return template;
    }

    public async findAll(page: number, limit: number) {
        return await this.templatesRepository.find({
            skip: (page - 1) * limit,
            take: limit,
            relations: ["creator"],
        });
    }

    public async findOne(templateId: string) {
        return await this.templatesRepository.findOne({
            where: {
                id: templateId,
            },
            relations: ["creator", "questions"],
        });
    }

    public async updateOne(updateTemplateDto: UpdateTemplateDto) {
        const template = await this.templatesRepository.findOne({
            where: {
                id: updateTemplateDto.id,
            },
        });

        if (!template) {
            throw new TemplateNotFoundException(updateTemplateDto.id);
        }

        const { questions, ...templateData } = updateTemplateDto;
        this.questionsService.updateMany(questions);
        return await this.templatesRepository.save({ ...template, ...templateData });

        // return await this.templatesRepository.save({ ...template, ...updateTemplateDto });
    }

    public async getCount() {
        return await this.templatesRepository.count();
    }
}
