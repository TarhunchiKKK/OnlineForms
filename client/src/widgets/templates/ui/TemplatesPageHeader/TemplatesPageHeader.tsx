import { Button, NumericInput } from "@/shared/ui";
import { maxTemplatesLimit, minTemplatesLimit, templatesLimitStep } from "./constants";
import { TTemplatesPageHeaderProps } from "./types";
import { useTemplatesPageHeader } from "./useTemplatesPageHeader.ts";
import { PrivilegentAccess, useUserRoleOnTheAccounts } from "@/features/roles-separation/index.ts";
import { OperationsOnTheAccounts } from "@/entities/roles/index.ts";
import { NavLink } from "react-router-dom";
import { routes } from "@/shared/constants/routing.ts";

export function TemplatesPageHeader({ limit, handleLimitChange }: TTemplatesPageHeaderProps) {
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

            <div className="flex flex-row justify-between items-center gap-3 max-w-40">
                <NumericInput
                    label="Per page:"
                    min={minTemplatesLimit}
                    max={maxTemplatesLimit}
                    step={templatesLimitStep}
                    value={limit}
                    onChange={handleLimitChange}
                />
            </div>

            <button onClick={handleAuth} className="text-xl text-green-primary">
                {authToken ? "Account" : "Sign In"}
            </button>
        </>
    );
}
