import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilledTemplate } from "../entities/filled-template.entity";
import { CreateFilledTemplateDto } from "../dto/create-filled-template.dto";
import { AnswersService } from "src/questions/services/answers.service";

@Injectable()
export class FilledTemplatesService {
    constructor(
        @InjectRepository(FilledTemplate)
        private readonly filledTemplatesService: Repository<FilledTemplate>,

        private readonly answersService: AnswersService,
    ) {}

    public async create(createTemplateDto: CreateFilledTemplateDto) {
        const filledTemplate = await this.filledTemplatesService.save({
            user: createTemplateDto.user,
            originalTemplate: createTemplateDto.originalTemplate,
        });

        await this.answersService.createMany(filledTemplate.id, createTemplateDto.answers);

        return filledTemplate;
    }

    public async findAll(templateId: string) {
        return await this.filledTemplatesService.find({
            where: {
                originalTemplate: {
                    id: templateId,
                },
            },
            relations: ["user"],
        });
    }

    public async findOne(filledTemplateId: string) {
        return await this.filledTemplatesService.findOne({
            where: {
                id: filledTemplateId,
            },
            relations: ["user", "originalTemplate", "answers"],
        });
    }

    public async findAnswersWithQuestions(templateId: string) {
        return await this.answersService.findAllByTemplateId(templateId);
    }
}
