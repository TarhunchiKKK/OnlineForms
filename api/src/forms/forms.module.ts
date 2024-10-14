import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Form } from "./entities/form.entity";
import { Answer } from "./entities/answer.entity";
import { FormsController } from "./forms.controller";
import { AnswersService } from "./services/answers.service";
import { FormsService } from "./services/forms.service";

@Module({
    imports: [TypeOrmModule.forFeature([Form, Answer])],
    controllers: [FormsController],
    providers: [AnswersService, FormsService],
})
export class FormsModule {}
