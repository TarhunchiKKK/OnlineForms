import { Outlet } from "react-router-dom";
import { useCurrentUser } from "./useCurrentUser";
import { Tabs } from "@/widgets/routing";
import { renderUserData, useCreateTabs } from "./helpers";
import { Button } from "@/shared/ui";
import { contentWrapperClassName } from "@/shared/constants";
import { useIntl } from "react-intl";

export function CurrentUserLayout() {
    const { user, handleSignOut } = useCurrentUser();

    const tabs = useCreateTabs();

    const intl = useIntl();

    return (
        <main className="py-4">
            <div className="container mx-auto">
                {user && (
                    <div
                        className={`mb-4 ${contentWrapperClassName} flex flex-row justify-between items-start`}
                    >
                        {renderUserData(user)}

                        <Button
                            content={intl.formatMessage({ id: "sign_out" })}
                            size="md"
                            onClick={handleSignOut}
                        />
                    </div>
                )}

                <div className={`mb-4 ${contentWrapperClassName}`}>
                    <Tabs tabs={tabs} />
                </div>

                <Outlet />
            </div>
        </main>
    );
}
