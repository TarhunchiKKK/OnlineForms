import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Form } from "../entities/form.entity";
import { CreateFormDto } from "../dto/create-form.dto";
import { AnswersService } from "./answers.service";

@Injectable()
export class FormsService {
    constructor(
        @InjectRepository(Form)
        private readonly formsRepository: Repository<Form>,

        private readonly answersService: AnswersService,
    ) {}

    public async create(createFormDto: CreateFormDto) {
        const filledTemplate = await this.formsRepository.save({
            user: createFormDto.user,
            originalTemplate: createFormDto.template,
        });

        await this.answersService.createMany(filledTemplate.id, createFormDto.answers);

        return filledTemplate;
    }

    public async findAllByTemplateId(templateId: string) {
        return await this.formsRepository.find({
            where: {
                template: {
                    id: templateId,
                },
            },
            relations: ["template"],
        });
    }

    public async findOne(formId: string) {
        return await this.formsRepository.findOne({
            where: {
                id: formId,
            },
            relations: ["user", "originalTemplate", "answers"],
        });
    }
}
