import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { QuestionTypes } from "src/questions/enums/question-types.enum";
import { Template } from "src/templates/entities/template.entity";

@Entity()
export class Question {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    sequenceNumber: number;

    @Column({ default: true })
    isDisplayed: boolean;

    @Column()
    type: QuestionTypes;

    @ManyToOne(() => Template, (template) => template.questions)
    template: Template;
}
