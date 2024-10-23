import { Template } from "src/templates/entities/template.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    content: string;

    @ManyToOne(() => Template, (template) => template.comments)
    template: Template;

    @ManyToOne(() => User, (user) => user.comments)
    creator: User;
}
