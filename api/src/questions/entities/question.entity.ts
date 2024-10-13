import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { QuestionTypes } from "../enums/question-types.enum";
import { Template } from "src/templates/entities/template.entity";
import { Answer } from "./answer.entity";

@Entity()
export class Question {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    sequenceNumber: number;

    @Column()
    type: QuestionTypes;

    @ManyToOne(() => Template, (template) => template.questions)
    template: Template;

    @OneToMany(() => Answer, (answer) => answer.question)
    answers: Answer[];
}
