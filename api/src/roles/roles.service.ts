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
import { FormsService } from "src/forms/forms.service";
import { TemplatesService } from "src/templates/templates.service";
import { UserStatuses } from "src/users/enums/user-statuses.enum";

@Injectable()
export class RolesService {
    constructor(
        private readonly userService: UsersService,
        private readonly formsService: FormsService,
        private readonly templatesService: TemplatesService,
    ) {}

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

        if (!user || user.status === UserStatuses.Blocked) {
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

        if (!user || user.status === UserStatuses.Blocked) {
            return UserRolesOnTheTemplate.Guest;
        }

        if (user.role === UserRoles.Admin) {
            return UserRolesOnTheTemplate.Admin;
        }

        if (user.templates.find((template) => template.id === templateId)) {
            return UserRolesOnTheTemplate.TemplateCreator;
        }

        const template = await this.templatesService.findOneById(templateId);
        if (template.publicAccess || template.availableUsers.find((u) => u.id === userId)) {
            return UserRolesOnTheTemplate.AvailableUser;
        }

        return UserRolesOnTheTemplate.AuthorizedUser;
    }

    public async checkTemplateOperationAvailability(dto: OperationOnTheTemplateDto) {
        const userRole = await this.defineUserRoleOnTheTemplate(dto.userId, dto.templateId);
        return permissionsOnTheTemplates[userRole].includes(dto.operation);
    }

    public async defineUserRoleOnTheForm(userId: string | null, formId: string) {
        const user = await this.checkForGuest(userId);

        if (!user || user.status === UserStatuses.Blocked) {
            return UserRolesOnTheForm.Guest;
        }

        if (user.role === UserRoles.Admin) {
            return UserRolesOnTheForm.Admin;
        }

        if (user.forms.find((form) => form.id === formId)) {
            return UserRolesOnTheForm.FormCreator;
        }

        const form = await this.formsService.findOne(formId!);
        if (user.templates.find((template) => template.id === form.template.id)) {
            return UserRolesOnTheForm.FormTemplateCreator;
        }

        return UserRolesOnTheForm.AuthorizedUser;
    }
}
