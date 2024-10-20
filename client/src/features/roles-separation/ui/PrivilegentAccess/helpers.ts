import {
    OperationsOnTheAccounts,
    OperationsOnTheForm,
    OperationsOnTheTemplate,
    UserRolesOnTheAccounts,
    UserRolesOnTheForm,
    UserRolesOnTheTemplate,
} from "@/entities/roles/models";
import { accountOperations, templateOperations } from "./constants";
import { TOperations, TRoles } from "./types";
import {
    permissionsOnTheAccounts,
    permissionsOnTheForms,
    permissionsOnTheTemplates,
} from "../../constants";

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
