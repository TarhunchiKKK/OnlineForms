import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FilledTemplate } from "./filled-template.entity";
import { Question } from "src/templates/entities/question.entity";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: true })
    line: string | null;

    @Column({ nullable: true, default: null, type: "text" })
    text: string | null;

    @Column({ nullable: true, default: null })
    isChacked: boolean | null;

    @Column({ nullable: true })
    value: number | null;

    @ManyToOne(() => FilledTemplate, (template) => template.answers)
    template: FilledTemplate;

    @ManyToOne(() => Question, (question) => question.answers)
    question: Question;
}
