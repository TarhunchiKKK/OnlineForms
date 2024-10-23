import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Template } from "../../templates/entities/template.entity";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @ManyToMany(() => Template, (template) => template.tags, {})
    templates: Template[];
}
