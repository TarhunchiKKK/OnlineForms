import { Button } from "@/shared/ui";
import { useTemplatesPageHeader } from "./useTemplatesPageHeader.ts";
import { PrivilegentAccess, useUserRoleOnTheAccounts } from "@/features/roles-separation";
import { OperationsOnTheAccounts } from "@/entities/roles";
import { NavLink } from "react-router-dom";
import { routes } from "@/shared/constants";

export function TemplatesPageHeader() {
    const { handleCreateTemplate, authToken, handleAuth } = useTemplatesPageHeader();

    const { userRoleOnTheAccounts } = useUserRoleOnTheAccounts();

    return (
        <>
            <Button size="md" content="New" onClick={handleCreateTemplate} />

            <PrivilegentAccess
                role={userRoleOnTheAccounts}
                operation={OperationsOnTheAccounts.ViewUsers}
            >
                <NavLink to={routes.Users}>Go to users</NavLink>
            </PrivilegentAccess>

            <button onClick={handleAuth} className="text-xl text-green-primary">
                {authToken ? "Account" : "Sign In"}
            </button>
        </>
    );
}
