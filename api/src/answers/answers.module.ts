import { Module } from "@nestjs/common";
import { AnswersService } from "./answers.service";
import { AnswersController } from "./answers.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Answer } from "./entities/answer.entity";
import { AnswersGateway } from "./answers.gateway";

@Module({
    imports: [TypeOrmModule.forFeature([Answer])],
    controllers: [AnswersController],
    providers: [AnswersService, AnswersGateway],
    exports: [AnswersService],
})
export class AnswersModule {}
