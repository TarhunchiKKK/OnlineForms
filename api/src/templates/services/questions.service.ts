import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "../entities/question.entity";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { UpdateQuestionDto } from "../dto/update-question.dto";

@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(Question)
        private readonly questionsRepository: Repository<Question>,
    ) {}

    public async create(createQuestionDto: CreateQuestionDto) {
        return await this.questionsRepository.save(createQuestionDto);
    }

    public async findAllByTemplateId(templateId: string) {
        return await this.questionsRepository.find({
            where: {
                template: {
                    id: templateId,
                },
            },
            relations: {
                template: true,
            },
        });
    }

    public async findOneById(questionId: string) {
        return await this.questionsRepository.findOne({
            where: {
                id: questionId,
            },
        });
    }

    public async update(updateQuestionDto: UpdateQuestionDto) {
        const question = await this.questionsRepository.findOne({
            where: {
                id: updateQuestionDto.id,
            },
            relations: {
                template: true,
            },
        });

        if (!question) {
            return await this.questionsRepository.save(updateQuestionDto);
        }

        return await this.questionsRepository.update(updateQuestionDto.id, {
            ...updateQuestionDto,
        });
    }

    public async remove(questionId: string) {
        await this.questionsRepository.delete(questionId);
    }
}
