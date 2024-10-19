import { OperationsOnTheAccounts, UserRolesOnTheAccounts } from "../enums/accounts";

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
    [UserRolesOnTheAccounts.AuthorizedUser]: [OperationsOnTheAccounts.ViewUsers],
    [UserRolesOnTheAccounts.Guest]: [],
};
