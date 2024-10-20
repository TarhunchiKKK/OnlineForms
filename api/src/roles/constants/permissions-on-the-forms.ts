import { OperationsOnTheForm, UserRolesOnTheForm } from "../enums/forms";

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
