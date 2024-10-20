import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { questionSequenceNumberSortCompareer } from "src/answers/helpers/sort-compareers";
import { CreateAnswerDto } from "./dto/create-answer.dto";
import { UpdateAnswerDto } from "./dto/update-answer.dto";
import { Answer } from "./entities/answer.entity";
import { AnswerNotFoundException } from "./exceptions/answer-not-found.exception";

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

    public async update(updateAnswerDto: UpdateAnswerDto) {
        const answer = await this.answersRepository.findOne({
            where: {
                id: updateAnswerDto.id,
            },
        });

        if (!answer) {
            throw new AnswerNotFoundException(updateAnswerDto.id);
        }

        return await this.answersRepository.update(updateAnswerDto.id, {
            ...updateAnswerDto,
        });
    }
}
