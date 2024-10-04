import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { QuestionTypes } from "../enums/question-types.enum";

@Entity()
@TableInheritance({ column: { name: "discriminator", type: "varchar" } })
export class Question {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    sequenceNumber: number;

    @Column()
    type: QuestionTypes;
}
