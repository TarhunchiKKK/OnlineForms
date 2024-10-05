import { ChildEntity, Column } from "typeorm";
import { Question } from "./question.entity";

@ChildEntity()
export class SingleLineQuestion extends Question {
    @Column()
    answer: string;
}
