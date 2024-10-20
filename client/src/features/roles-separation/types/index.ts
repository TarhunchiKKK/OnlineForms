import {
    OperationsOnTheAccounts,
    OperationsOnTheTemplate,
    OperationsOnTheForm,
    UserRolesOnTheAccounts,
    UserRolesOnTheTemplate,
    UserRolesOnTheForm,
} from "@/entities/roles";

export type TOperations = OperationsOnTheAccounts | OperationsOnTheTemplate | OperationsOnTheForm;

export type TRoles = UserRolesOnTheAccounts | UserRolesOnTheTemplate | UserRolesOnTheForm;
