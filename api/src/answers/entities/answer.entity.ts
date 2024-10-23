import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Form } from "../../forms/entities/form.entity";
import { QuestionTypes } from "src/questions/enums/question-types.enum";

@Entity()
export class Answer {
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
}
