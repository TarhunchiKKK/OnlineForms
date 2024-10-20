import {
    UserRolesOnTheAccounts,
    OperationsOnTheAccounts,
    OperationsOnTheTemplate,
    UserRolesOnTheTemplate,
    OperationsOnTheForm,
    UserRolesOnTheForm,
} from "@/entities/roles";

export const permissionsOnTheAccounts: Record<UserRolesOnTheAccounts, OperationsOnTheAccounts[]> = {
    [UserRolesOnTheAccounts.Admin]: [
        OperationsOnTheAccounts.ViewUsers,
        OperationsOnTheAccounts.ChangeUserStatus,
        OperationsOnTheAccounts.RemoveUser,
        OperationsOnTheAccounts.ChangeAdminPermissions,
    ],
    [UserRolesOnTheAccounts.AccountOwner]: [
        OperationsOnTheAccounts.ViewUsers,
        OperationsOnTheAccounts.RemoveUser,
    ],
    [UserRolesOnTheAccounts.AuthorizedUser]: [],
    [UserRolesOnTheAccounts.Guest]: [],
};

export const permissionsOnTheTemplates: Record<UserRolesOnTheTemplate, OperationsOnTheTemplate[]> =
    {
        [UserRolesOnTheTemplate.Admin]: [
            OperationsOnTheTemplate.CreateTemplate,
            OperationsOnTheTemplate.EditTemplate,
            OperationsOnTheTemplate.OpenTemplateForUser,
        ],
        [UserRolesOnTheTemplate.TemplateCreator]: [
            OperationsOnTheTemplate.CreateTemplate,
            OperationsOnTheTemplate.EditTemplate,
            OperationsOnTheTemplate.OpenTemplateForUser,
        ],
        [UserRolesOnTheTemplate.AuthorizedUser]: [OperationsOnTheTemplate.CreateTemplate],
        [UserRolesOnTheTemplate.Guest]: [],
    };

export const permissionsOnTheForms: Record<UserRolesOnTheForm, OperationsOnTheForm[]> = {
    [UserRolesOnTheForm.Admin]: [
        OperationsOnTheForm.CreateForm,
        OperationsOnTheForm.EditForm,
        OperationsOnTheForm.ViewForm,
        OperationsOnTheForm.ViewTemplateForms,
    ],
    [UserRolesOnTheForm.FormTemplateCreator]: [
        OperationsOnTheForm.CreateForm,
        OperationsOnTheForm.EditForm,
        OperationsOnTheForm.ViewForm,
        OperationsOnTheForm.ViewTemplateForms,
    ],
    [UserRolesOnTheForm.FormCreator]: [OperationsOnTheForm.EditForm, OperationsOnTheForm.ViewForm],
    [UserRolesOnTheForm.AuthorizedUser]: [OperationsOnTheForm.CreateForm],
    [UserRolesOnTheForm.Guest]: [],
};
