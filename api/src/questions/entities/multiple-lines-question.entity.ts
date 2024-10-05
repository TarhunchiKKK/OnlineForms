import { ChildEntity, Column } from "typeorm";
import { Question } from "./question.entity";

@ChildEntity()
export class MultipleLinesQuestion extends Question {
    @Column({ type: "text" })
    answer: string;
}
