import {
    OperationsOnTheAccounts,
    OperationsOnTheTemplate,
    OperationsOnTheForm,
    UserRolesOnTheAccounts,
    UserRolesOnTheTemplate,
    UserRolesOnTheForm,
} from "@/entities/roles/models";

export type TOperations = OperationsOnTheAccounts | OperationsOnTheTemplate | OperationsOnTheForm;

export type TRoles = UserRolesOnTheAccounts | UserRolesOnTheTemplate | UserRolesOnTheForm;

export type TPrivilegentAccessProps = {
    role: TRoles | undefined;

    operation: TOperations;

    children: string | JSX.Element | JSX.Element[];
};
