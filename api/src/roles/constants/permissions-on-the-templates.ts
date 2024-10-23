import { OperationsOnTheTemplate, UserRolesOnTheTemplate } from "../enums/templates";

export const permissionsOnTheTemplates: Record<UserRolesOnTheTemplate, OperationsOnTheTemplate[]> =
    {
        [UserRolesOnTheTemplate.Admin]: [
            OperationsOnTheTemplate.SeeFullTemplate,
            OperationsOnTheTemplate.CreateTemplate,
            OperationsOnTheTemplate.EditTemplate,
            OperationsOnTheTemplate.OpenTemplateForUser,
            OperationsOnTheTemplate.CreateComment,
            OperationsOnTheTemplate.LikeTemplate,
        ],
        [UserRolesOnTheTemplate.TemplateCreator]: [
            OperationsOnTheTemplate.SeeFullTemplate,
            OperationsOnTheTemplate.CreateTemplate,
            OperationsOnTheTemplate.EditTemplate,
            OperationsOnTheTemplate.OpenTemplateForUser,
            OperationsOnTheTemplate.CreateComment,
            OperationsOnTheTemplate.LikeTemplate,
        ],
        [UserRolesOnTheTemplate.AvailableUser]: [
            OperationsOnTheTemplate.CreateForm,
            OperationsOnTheTemplate.CreateComment,
            OperationsOnTheTemplate.LikeTemplate,
        ],
        [UserRolesOnTheTemplate.AuthorizedUser]: [
            OperationsOnTheTemplate.CreateTemplate,
            OperationsOnTheTemplate.LikeTemplate,
        ],
        [UserRolesOnTheTemplate.Guest]: [],
    };
