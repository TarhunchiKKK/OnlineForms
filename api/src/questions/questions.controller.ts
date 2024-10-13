import { Controller, Get, Post, Body, Param, Query } from "@nestjs/common";
import { QuestionsService } from "./services/questions.service";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { AnswersService } from "./services/answers.service";

@Controller("questions")
export class QuestionsController {
    constructor(
        private readonly questionsService: QuestionsService,
        private readonly answersService: AnswersService,
    ) {}

    @Post()
    public async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
        return await this.questionsService.create(createQuestionDto);
    }

    @Get()
    public async findQuestionsByTemplateId(@Query("template") templateId: string) {
        return await this.questionsService.findAllByTemplateId(templateId);
    }

    @Get(":id")
    public async findQuestionById(@Param("id") questionId: string) {
        return await this.questionsService.findOneById(questionId);
    }

    @Get("/answers/:id")
    public async findAnswersByFilledTemplateId(@Param("id") filledTemplateId: string) {
        return await this.answersService.findAllByTemplateId(filledTemplateId);
    }
}
