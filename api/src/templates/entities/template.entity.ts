import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { TemplateTopics } from "../enums/template-topics.enum";
import { User } from "src/users/entities/user.entity";
import { Question } from "src/questions/entities/question.entity";
import { Form } from "src/forms/entities/form.entity";
import { Tag } from "../../tags/entities/tag.entity";
import { Comment } from "src/comments/entities/comment.entity";

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

    @Column({ nullable: true, default: null, type: "text" })
    image: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.templates)
    creator: User;

    @ManyToMany(() => Tag, (tag) => tag.templates, {})
    @JoinTable()
    tags: Tag[];

    @Column({ default: true })
    publicAccess: boolean;

    @ManyToMany(() => User, (user) => user.availableTemplates)
    @JoinTable()
    availableUsers: User[];

    @OneToMany(() => Question, (question) => question.template)
    questions: Question[];

    @OneToMany(() => Form, (form) => form.template)
    forms: Form[];

    @OneToMany(() => Comment, (comment) => comment.template)
    comments: Comment[];

    @ManyToMany(() => User, (user) => user.likedTemplates)
    @JoinTable()
    likers: User[];
}
