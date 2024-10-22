import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
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
        return await this.answersRepository.find({
            where: {
                form: {
                    id: templateId,
                },
            },
            order: {
                sequenceNumber: "ASC",
            },
        });
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
