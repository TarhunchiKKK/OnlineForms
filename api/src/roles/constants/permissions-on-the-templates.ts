import { OperationsOnTheTemplate, UserRolesOnTheTemplate } from "../enums/templates";

export const permissionsOnTheTemplates: Record<UserRolesOnTheTemplate, OperationsOnTheTemplate[]> =
    {
        [UserRolesOnTheTemplate.Admin]: [
            OperationsOnTheTemplate.SeeFullTemplate,
            OperationsOnTheTemplate.CreateTemplate,
            OperationsOnTheTemplate.EditTemplate,
            OperationsOnTheTemplate.OpenTemplateForUser,
        ],
        [UserRolesOnTheTemplate.TemplateCreator]: [
            OperationsOnTheTemplate.SeeFullTemplate,
            OperationsOnTheTemplate.CreateTemplate,
            OperationsOnTheTemplate.EditTemplate,
            OperationsOnTheTemplate.OpenTemplateForUser,
        ],
        [UserRolesOnTheTemplate.AvailableUser]: [OperationsOnTheTemplate.CreateForm],
        [UserRolesOnTheTemplate.AuthorizedUser]: [OperationsOnTheTemplate.CreateTemplate],
        [UserRolesOnTheTemplate.Guest]: [],
    };
