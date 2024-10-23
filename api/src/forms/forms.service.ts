import { FindManyOptions, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Form } from "./entities/form.entity";
import { CreateFormDto } from "./dto/create-form.dto";
import { AnswersService } from "src/answers/answers.service";

@Injectable()
export class FormsService {
    constructor(
        @InjectRepository(Form)
        private readonly formsRepository: Repository<Form>,

        private readonly answersService: AnswersService,
    ) {}

    public async create(createFormDto: CreateFormDto) {
        const form = await this.formsRepository.save(createFormDto);

        await this.answersService.createMany(form.id, createFormDto.answers);

        return form;
    }

    public async findAllByTemplateId(templateId: string) {
        return await this.formsRepository.find({
            relations: {
                template: true,
                creator: true,
            },
            where: {
                template: {
                    id: templateId,
                },
            },
        });
    }

    public async findAllByUserId(userId: string, templateId?: string) {
        const options: FindManyOptions<Form> = {
            relations: {
                creator: true,
                template: true,
            },
            where: {
                creator: {
                    id: userId,
                },
            },
        };

        if (templateId) {
            options.where = {
                creator: {
                    id: userId,
                },
                template: {
                    id: templateId,
                },
            };
        }

        return await this.formsRepository.find(options);
    }

    public async findOne(formId: string) {
        return await this.formsRepository.findOne({
            where: {
                id: formId,
            },
            relations: {
                creator: true,
                template: {
                    tags: true,
                },
            },
        });
    }
}
