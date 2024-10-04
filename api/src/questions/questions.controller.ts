import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { QuestionsService } from "./questions.service";
import { CreateQuestionDto } from "./dto/create-question.dto";

@Controller("questions")
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) {}

    @Post()
    public async create(@Body() createQuestionDto: CreateQuestionDto) {
        return await this.questionsService.create(createQuestionDto);
    }

    @Get()
    public async findAll() {
        return await this.questionsService.findAll();
    }

    @Get(":id")
    public async findOne(@Param("id") questionId: string) {
        return await this.questionsService.findOne(questionId);
    }
}
