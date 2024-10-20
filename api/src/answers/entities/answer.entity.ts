import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "src/questions/entities/question.entity";
import { Form } from "../../forms/entities/form.entity";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: true })
    line: string | null;

    @Column({ nullable: true, default: null, type: "text" })
    text: string | null;

    @Column({ nullable: true, default: null })
    isChecked: boolean | null;

    @Column({ nullable: true, default: null })
    value: number | null;

    @ManyToOne(() => Form, (form) => form.answers)
    form: Form;

    @ManyToOne(() => Question, (question) => question.answers)
    question: Question;
}
