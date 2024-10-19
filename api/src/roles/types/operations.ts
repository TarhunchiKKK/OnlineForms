import { OperationsOnTheAccounts } from "../enums/accounts";
import { OperationsOnTheForm } from "../enums/forms";
import { OperationsOnTheTemplate } from "../enums/templates";

export type Operations = OperationsOnTheAccounts | OperationsOnTheTemplate | OperationsOnTheForm;
