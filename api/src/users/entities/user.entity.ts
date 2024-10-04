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

    @OneToMany(() => Template, (template: Template) => template.creator)
    templates: Template[];
}
