import { Outlet } from "react-router-dom";
import { useCurrentUser } from "./useCurrentUser";
import { Tabs } from "@/widgets/routing";
import { renderUserData, SalesForceContent, useCreateTabs } from "./helpers";
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

                        <div className="flex flex-col gap-4">
                            <Button
                                content={intl.formatMessage({ id: "sign_out" })}
                                size="md"
                                onClick={handleSignOut}
                            />

                            <SalesForceContent />
                        </div>
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
