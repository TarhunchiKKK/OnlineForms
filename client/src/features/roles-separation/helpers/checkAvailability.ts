import {
    OperationsOnTheAccounts,
    OperationsOnTheForm,
    OperationsOnTheTemplate,
    UserRolesOnTheAccounts,
    UserRolesOnTheForm,
    UserRolesOnTheTemplate,
} from "@/entities/roles/models";
import {
    permissionsOnTheAccounts,
    permissionsOnTheTemplates,
    permissionsOnTheForms,
} from "../constants";
import { TRoles, TOperations } from "../types";

export const accountOperations = Object.values(OperationsOnTheAccounts);
export const templateOperations = Object.values(OperationsOnTheTemplate);
export const formOperations = Object.values(OperationsOnTheForm);

export const checkAvailability = (role: TRoles, operation: TOperations) => {
    if (accountOperations.includes(operation as OperationsOnTheAccounts)) {
        return permissionsOnTheAccounts[role as UserRolesOnTheAccounts].includes(
            operation as OperationsOnTheAccounts,
        );
    } else if (templateOperations.includes(operation as OperationsOnTheTemplate)) {
        return permissionsOnTheTemplates[role as UserRolesOnTheTemplate].includes(
            operation as OperationsOnTheTemplate,
        );
    } else {
        return permissionsOnTheForms[role as UserRolesOnTheForm].includes(
            operation as OperationsOnTheForm,
        );
    }
};
