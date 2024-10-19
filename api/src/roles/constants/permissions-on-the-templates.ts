import { OperationsOnTheTemplate, UserRolesOnTheTemplate } from "../enums/templates";

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
