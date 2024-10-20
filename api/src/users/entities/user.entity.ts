import { Form } from "src/forms/entities/form.entity";
import { UserRoles } from "src/roles/enums/user-roles.enum";
import { Template } from "src/templates/entities/template.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserStatuses } from "../enums/user-statuses.enum";

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

    @Column({ nullable: false, default: UserRoles.AuthorizedUser })
    role: UserRoles;

    @Column({ nullable: false, default: UserStatuses.Active })
    status: UserStatuses;

    @OneToMany(() => Template, (template) => template.creator)
    templates: Template[];

    @OneToMany(() => Form, (form) => form.creator)
    forms: Form[];
}
