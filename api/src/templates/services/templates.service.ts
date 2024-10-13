import { Injectable } from "@nestjs/common";
import { CreateTemplateDto } from "../dto/create-template.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Template } from "../entities/template.entity";
import { Repository } from "typeorm";
import { TemplateExistException } from "../exceptions/template-exist.exception";
import { QuestionsService } from "src/questions/services/questions.service";

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
        });
    }

    public async getCount() {
        return await this.templatesRepository.count();
    }
}
