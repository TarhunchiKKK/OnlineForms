import { FilledTemplate } from "src/answers/entities/filled-template.entity";
import { Template } from "src/templates/entities/template.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: true, default: null })
    username: string | null;

    @Column()
    email: string;

    @Column({ nullable: true, default: null })
    password: string | null;

    @OneToMany(() => Template, (template) => template.creator)
    templates: Template[];

    @OneToMany(() => FilledTemplate, (template) => template.user)
    filledTemplates: FilledTemplate[];
}
