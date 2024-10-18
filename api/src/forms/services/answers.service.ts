import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Answer } from "../entities/answer.entity";
import { CreateAnswerDto } from "../dto/create-answer.dto";
import { questionSequenceNumberSortCompareer } from "../helpers/sort-compareers";

@Injectable()
export class AnswersService {
    constructor(@InjectRepository(Answer) private readonly answersRepository: Repository<Answer>) {}

    public async create(createAnswerDto: CreateAnswerDto) {
        return await this.answersRepository.save(createAnswerDto);
    }

    public async createMany(formId: string, dtos: Omit<CreateAnswerDto, "form">[]) {
        const createAnswersDtos: CreateAnswerDto[] = dtos.map((answer) => ({
            ...answer,
            form: {
                id: formId,
            },
        }));

        const creationPromises = createAnswersDtos.map((dto) => this.answersRepository.save(dto));

        return await Promise.all(creationPromises);
    }

    public async findAllByFormId(templateId: string) {
        const answers = await this.answersRepository.find({
            relations: {
                question: true,
            },
            where: {
                form: {
                    id: templateId,
                },
            },
        });

        return answers.sort(questionSequenceNumberSortCompareer);
    }
}
