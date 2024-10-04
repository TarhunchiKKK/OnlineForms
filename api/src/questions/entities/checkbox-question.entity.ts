import { ChildEntity, Column } from "typeorm";
import { Question } from "./question.entity";

@ChildEntity()
export class CheckboxQuestion extends Question {
    @Column()
    label: string;

    @Column()
    isChecked: boolean;
}
