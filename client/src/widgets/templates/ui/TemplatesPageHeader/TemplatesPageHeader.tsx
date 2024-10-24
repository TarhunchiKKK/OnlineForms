import { Button } from "@/shared/ui";
import { useTemplatesPageHeader } from "./useTemplatesPageHeader.ts";
import { PrivilegentAccess, useUserRoleOnTheAccounts } from "@/features/roles-separation";
import { OperationsOnTheAccounts, OperationsOnTheTemplate } from "@/entities/roles";
import { NavLink } from "react-router-dom";
import { routes } from "@/shared/constants";
import { ThemeSwitcher } from "@/features/dark-theme/index.ts";
import { LocalesDropdown } from "@/features/localization/index.ts";
import { useIntl } from "react-intl";

export function TemplatesPageHeader() {
    const { handleCreateTemplate, authToken, handleAuth } = useTemplatesPageHeader();

    const { userRoleOnTheAccounts } = useUserRoleOnTheAccounts();

    const intl = useIntl();

    return (
        <>
            <PrivilegentAccess
                role={userRoleOnTheAccounts}
                operation={OperationsOnTheTemplate.CreateTemplate}
            >
                <Button
                    size="md"
                    content={intl.formatMessage({ id: "new_template" })}
                    onClick={handleCreateTemplate}
                />
            </PrivilegentAccess>

            <PrivilegentAccess
                role={userRoleOnTheAccounts}
                operation={OperationsOnTheAccounts.ViewUsers}
            >
                <NavLink to={routes.Users}>{intl.formatMessage({ id: "view_users" })}</NavLink>
            </PrivilegentAccess>

            <LocalesDropdown />

            <ThemeSwitcher />

            <button onClick={handleAuth} className="text-xl text-green-primary">
                {authToken
                    ? intl.formatMessage({ id: "account" })
                    : intl.formatMessage({ id: "sign_in" })}
            </button>
        </>
    );
}
