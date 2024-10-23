import { OperationsOnTheTemplate, UserRolesOnTheTemplate } from "../enums/templates";

export const permissionsOnTheTemplates: Record<UserRolesOnTheTemplate, OperationsOnTheTemplate[]> =
    {
        [UserRolesOnTheTemplate.Admin]: [
            OperationsOnTheTemplate.SeeFullTemplate,
            OperationsOnTheTemplate.CreateTemplate,
            OperationsOnTheTemplate.EditTemplate,
            OperationsOnTheTemplate.OpenTemplateForUser,
            OperationsOnTheTemplate.CreateComment,
        ],
        [UserRolesOnTheTemplate.TemplateCreator]: [
            OperationsOnTheTemplate.SeeFullTemplate,
            OperationsOnTheTemplate.CreateTemplate,
            OperationsOnTheTemplate.EditTemplate,
            OperationsOnTheTemplate.OpenTemplateForUser,
            OperationsOnTheTemplate.CreateComment,
        ],
        [UserRolesOnTheTemplate.AvailableUser]: [
            OperationsOnTheTemplate.CreateForm,
            OperationsOnTheTemplate.CreateComment,
        ],
        [UserRolesOnTheTemplate.AuthorizedUser]: [OperationsOnTheTemplate.CreateTemplate],
        [UserRolesOnTheTemplate.Guest]: [],
    };
