import { Module } from "@nestjs/common";
import { QuestionsService } from "./questions.service";
import { QuestionsController } from "./questions.controller";
import { QuestionsGateway } from "./questions.gateway";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Question } from "./entities/question.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Question])],
    controllers: [QuestionsController],
    providers: [QuestionsService, QuestionsGateway],
    exports: [QuestionsService],
})
export class QuestionsModule {}
