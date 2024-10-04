import { ChildEntity, Column } from "typeorm";
import { Question } from "./question.entity";

@ChildEntity()
export class PositiveIntegerQuestion extends Question {
    @Column()
    value: number;
}
