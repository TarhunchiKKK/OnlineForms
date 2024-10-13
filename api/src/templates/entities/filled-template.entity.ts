import { User } from "src/users/entities/user.entity";
import { CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Template } from "./template.entity";
import { Answer } from "src/questions/entities/answer.entity";

@Entity()
export class FilledTemplate {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.filledTemplates)
    user: User;

    @ManyToOne(() => Template, (template) => template.filledTemplates)
    originalTemplate: Template;

    @OneToMany(() => Answer, (answer) => answer.template)
    answers: Answer[];
}
