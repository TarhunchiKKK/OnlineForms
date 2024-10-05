import { Injectable } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "./entities/question.entity";
import { Repository } from "typeorm";
import { CheckboxQuestion } from "./entities/checkbox-question.entity";
import { SingleLineQuestion } from "./entities/single-line-question.entity";
import { MultipleLinesQuestion } from "./entities/multiple-lines-question.entity";
import { PositiveIntegerQuestion } from "./entities/positive-integer-question";
import { QuestionTypes } from "./enums/question-types.enum";

@Injectable()
export class QuestionsService {
    private readonly repositoriesMap: Record<QuestionTypes, Repository<Question>>;

    constructor(
        @InjectRepository(Question)
        private readonly questionsRepository: Repository<Question>,

        @InjectRepository(SingleLineQuestion)
        private readonly singleLineQuestionRepository: Repository<SingleLineQuestion>,

        @InjectRepository(MultipleLinesQuestion)
        private readonly multipleLinesQuestionRepository: Repository<MultipleLinesQuestion>,

        @InjectRepository(CheckboxQuestion)
        private readonly checkboxQuestionsRepository: Repository<CheckboxQuestion>,

        @InjectRepository(PositiveIntegerQuestion)
        private readonly positiveIntegerQuestionsRepository: Repository<PositiveIntegerQuestion>,
    ) {
        this.repositoriesMap = {
            [QuestionTypes.SingleLine]: this.singleLineQuestionRepository,
            [QuestionTypes.MultipleLines]: this.multipleLinesQuestionRepository,
            [QuestionTypes.Checkbox]: this.checkboxQuestionsRepository,
            [QuestionTypes.PositiveInteger]: this.positiveIntegerQuestionsRepository,
        };
    }

    public async create(createQuestionDto: CreateQuestionDto) {
        const repository = this.repositoriesMap[createQuestionDto.type];
        return await repository.save(createQuestionDto);
    }

    public async findAll() {
        const repositories = Object.values(this.repositoriesMap);

        const questionGroups = await Promise.all(
            repositories.map((repository) => repository.find()),
        );

        const questions: Question[] = [];
        questionGroups.forEach((group) => questions.push(...group));
        return questions;
    }

    public async findOne(questionId: string) {
        const repositories = Object.values(this.repositoriesMap);

        const findOptions = {
            where: {
                id: questionId,
            },
        };

        const questions = await Promise.all(
            repositories.map((repository) => repository.findOne(findOptions)),
        );

        return questions.find((question) => question !== null);
    }

    public async createFixedQuestions(templateId: string) {
        const userQuestionDto: CreateQuestionDto = {
            title: "Your name:",
            sequenceNumber: 1,
            type: QuestionTypes.SingleLine,
        };

        const dateQuestionDto: CreateQuestionDto = {
            title: "Filled at:",
            sequenceNumber: 2,
            type: QuestionTypes.SingleLine,
        };

        return Promise.all([this.create(userQuestionDto), this.create(dateQuestionDto)]);
    }
}
