import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { TemplateTopics } from "../enums/template-topics.enum";
import { User } from "src/users/entities/user.entity";
import { Question } from "src/questions/entities/question.entity";
import { FilledTemplate } from "./filled-template.entity";

@Entity()
export class Template {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column({ type: "text" })
    description: string;

    @Column()
    topic: TemplateTopics;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.templates)
    creator: User;

    @OneToMany(() => Question, (question) => question.template)
    questions: Question[];

    @OneToMany(() => FilledTemplate, (template) => template.originalTemplate)
    filledTemplates: FilledTemplate[];
}
