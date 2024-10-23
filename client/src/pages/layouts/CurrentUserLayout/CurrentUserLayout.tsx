import { Outlet } from "react-router-dom";
import { useCurrentUser } from "./useCurrentUser";
import { Tabs } from "@/widgets/routing";
import { tabs } from "./constants";
import { renderUserData } from "./helpers";
import { Button } from "@/shared/ui";
import { contentWrapperClassName } from "@/shared/constants";

export function CurrentUserLayout() {
    const { user, handleSignOut } = useCurrentUser();

    return (
        <main className="py-4">
            <div className="container mx-auto">
                {user && (
                    <div
                        className={`mb-4 ${contentWrapperClassName} flex flex-row justify-between items-start`}
                    >
                        {renderUserData(user)}

                        <Button content="Sign Out" size="md" onClick={handleSignOut} />
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
