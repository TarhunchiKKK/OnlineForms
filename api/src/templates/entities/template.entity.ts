import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TemplateTopics } from "../enums/template-topics.enum";
import { User } from "src/users/entities/user.entity";

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

    @ManyToOne(() => User, (user: User) => user.templates)
    creator: User;
}
