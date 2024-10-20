import { TOperations, TRoles } from "../../types";

export type TPrivilegentAccessProps = {
    role: TRoles | undefined;

    operation: TOperations;

    children: string | JSX.Element | JSX.Element[];
};
