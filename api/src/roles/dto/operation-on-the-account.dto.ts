import { OperationsOnTheAccounts } from "../enums/accounts";

export class OperationOnTheAccountDto {
    userId: string | null;
    accountId?: string;
    operation: OperationsOnTheAccounts;
}
