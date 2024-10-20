import { CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Template } from "src/templates/entities/template.entity";
import { User } from "src/users/entities/user.entity";
import { Answer } from "../../answers/entities/answer.entity";

@Entity()
export class Form {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.forms)
    creator: User;

    @ManyToOne(() => Template, (template) => template.forms)
    template: Template;

    @OneToMany(() => Answer, (answer) => answer.form)
    answers: Answer[];
}
