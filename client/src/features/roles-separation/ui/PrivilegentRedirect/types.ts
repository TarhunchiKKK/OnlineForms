import { TOperations, TRoles } from "../../types";

export type TPrivilegentRedirectProps = {
    role?: TRoles;

    operation: TOperations;

    children: string | JSX.Element | JSX.Element[];

    route: string;
};
