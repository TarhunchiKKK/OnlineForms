import { OperationsOnTheAccounts, UserRolesOnTheAccounts } from "../enums/accounts";

export const permissionsOnTheAccounts: Record<UserRolesOnTheAccounts, OperationsOnTheAccounts[]> = {
    [UserRolesOnTheAccounts.Admin]: [
        OperationsOnTheAccounts.ViewUsers,
        OperationsOnTheAccounts.BlockUser,
        OperationsOnTheAccounts.UnblockUser,
        OperationsOnTheAccounts.RemoveUser,
        OperationsOnTheAccounts.AddUserToAdmins,
        OperationsOnTheAccounts.RemoveUserFromAdmins,
    ],
    [UserRolesOnTheAccounts.AccountOwner]: [
        OperationsOnTheAccounts.ViewUsers,
        OperationsOnTheAccounts.RemoveUser,
    ],
    [UserRolesOnTheAccounts.AuthorizedUser]: [OperationsOnTheAccounts.ViewUsers],
    [UserRolesOnTheAccounts.Guest]: [],
};
