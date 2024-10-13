import { Template } from "src/templates/entities/template.entity";
import { User } from "src/users/entities/user.entity";
import { CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answer } from "./answer.entity";

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
