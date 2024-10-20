import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Form } from "./entities/form.entity";
import { FormsController } from "./forms.controller";
import { FormsService } from "./forms.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConfig } from "src/shared/constants/jwt";
import { AnswersModule } from "src/answers/answers.module";

@Module({
    imports: [AnswersModule, TypeOrmModule.forFeature([Form]), JwtModule.registerAsync(jwtConfig)],
    controllers: [FormsController],
    providers: [FormsService],
})
export class FormsModule {}
