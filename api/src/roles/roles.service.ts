import { Injectable } from "@nestjs/common";
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";
import { UserRolesOnTheAccounts } from "./enums/accounts";
import { UserRoles } from "./enums/user-roles.enum";
import { UserRolesOnTheTemplate } from "./enums/templates";
import { UserRolesOnTheForm } from "./enums/forms";
import { OperationOnTheAccountDto } from "./dto/operation-on-the-account.dto";
import { permissionsOnTheAccounts } from "./constants/permissions-on-the-accounts";
import { OperationOnTheTemplateDto } from "./dto/operation-on-the-template.dto";
import { permissionsOnTheTemplates } from "./constants/permissions-on-the-templates";

@Injectable()
export class RolesService {
    constructor(private readonly userService: UsersService) {}

    private async checkForGuest(userId: string | null): Promise<User | null> {
        if (!userId) {
            return null;
        }

        const user = await this.userService.findOneById(userId);

        if (!user) {
            return null;
        }

        return user;
    }

    public async defineUserRoleOnTheAccount(userId: string | null, accountId?: string) {
        const user = await this.checkForGuest(userId);
        if (!user) {
            return UserRolesOnTheAccounts.Guest;
        }

        if (user.role === UserRoles.Admin) {
            return UserRolesOnTheAccounts.Admin;
        }

        if (user.id === accountId) {
            return UserRolesOnTheAccounts.AccountOwner;
        }

        return UserRolesOnTheAccounts.AuthorizedUser;
    }

    public async checkAccountOperationAvailability(dto: OperationOnTheAccountDto) {
        const userRole = await this.defineUserRoleOnTheAccount(dto.userId, dto.accountId);
        return permissionsOnTheAccounts[userRole].includes(dto.operation);
    }

    public async defineUserRoleOnTheTemplate(userId: string | null, templateId: string) {
        const user = await this.checkForGuest(userId);
        if (!user) {
            return UserRolesOnTheTemplate.Guest;
        }

        if (user.role === UserRoles.Admin) {
            return UserRolesOnTheTemplate.Admin;
        }

        if (user.templates.find((template) => template.id === templateId)) {
            return UserRolesOnTheTemplate.TemplateCreator;
        }

        return UserRolesOnTheTemplate.AuthorizedUser;
    }

    public async checkTemplateOperationAvailability(dto: OperationOnTheTemplateDto) {
        const userRole = await this.defineUserRoleOnTheTemplate(dto.userId, dto.templateId);
        return permissionsOnTheTemplates[userRole].includes(dto.operation);
    }

    public async defineUserRoleOnTheForm(userId: string | null, formId: string) {
        const user = await this.checkForGuest(userId);
        if (!user) {
            return UserRolesOnTheForm.Guest;
        }

        if (user.role === UserRoles.Admin) {
            return UserRolesOnTheForm.Admin;
        }

        if (user.forms.find((form) => form.id === formId)) {
            return UserRolesOnTheForm.FormCreator;
        }

        return UserRolesOnTheForm.AuthorizedUser;
    }
}
