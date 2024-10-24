import { Button } from "@/shared/ui";
import { useTemplatesPageHeader } from "./useTemplatesPageHeader.ts";
import { PrivilegentAccess, useUserRoleOnTheAccounts } from "@/features/roles-separation";
import { OperationsOnTheAccounts, OperationsOnTheTemplate } from "@/entities/roles";
import { NavLink } from "react-router-dom";
import { routes } from "@/shared/constants";
import { ThemeSwitcher } from "@/features/dark-theme/index.ts";

export function TemplatesPageHeader() {
    const { handleCreateTemplate, authToken, handleAuth } = useTemplatesPageHeader();

    const { userRoleOnTheAccounts } = useUserRoleOnTheAccounts();

    return (
        <>
            <PrivilegentAccess
                role={userRoleOnTheAccounts}
                operation={OperationsOnTheTemplate.CreateTemplate}
            >
                <Button size="md" content="New" onClick={handleCreateTemplate} />
            </PrivilegentAccess>

            <PrivilegentAccess
                role={userRoleOnTheAccounts}
                operation={OperationsOnTheAccounts.ViewUsers}
            >
                <NavLink to={routes.Users}>Go to users</NavLink>
            </PrivilegentAccess>

            <ThemeSwitcher />

            <button onClick={handleAuth} className="text-xl text-green-primary">
                {authToken ? "Account" : "Sign In"}
            </button>
        </>
    );
}
