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

    public async createMany(templateId: string, dtos: Omit<CreateQuestionDto, "template">[]) {
        const createQuestionsDtos: CreateQuestionDto[] = dtos.map((dto) => ({
            ...dto,
            template: {
                id: templateId,
            },
        }));

        const creationPromises = createQuestionsDtos.map((dto) =>
            this.questionsRepository.save(dto),
        );

        return await Promise.all(creationPromises);
    }

    public async findAllByTemplateId(templateId: string) {
        return await this.questionsRepository.find({
            where: {
                template: {
                    id: templateId,
                },
            },
            relations: ["template"],
        });
    }

    public async findOneById(questionId: string) {
        return await this.questionsRepository.findOne({
            where: {
                id: questionId,
            },
        });
    }

    public async updateOne(updateQuestionDto: UpdateQuestionDto) {
        const question = await this.questionsRepository.findOne({
            relations: {
                template: true,
            },
            where: {
                id: updateQuestionDto.id,
            },
        });

        if (!question) {
            console.log("jhghfgn");
            return await this.questionsRepository.save(updateQuestionDto);
        }

        return await this.questionsRepository.update(updateQuestionDto.id, {
            ...updateQuestionDto,
        });
    }

    public async updateMany(dtos: UpdateQuestionDto[]) {
        const updatingPromises = dtos.map((dto) => this.updateOne(dto));
        await Promise.allSettled(updatingPromises);
    }
}
