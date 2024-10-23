import { UsersTable } from "@/widgets/users";
import { useRedirectProps, useUsers } from "./hooks";
import { contentWrapperClassName } from "@/shared/constants";
import { PrivilegentRedirect } from "@/features/roles-separation";

export function UsersPage() {
    const { users } = useUsers();

    const redirectProps = useRedirectProps();

    return (
        <main className="py-4">
            <div className="container mx-auto">
                <div className={contentWrapperClassName}>
                    <PrivilegentRedirect {...redirectProps}>
                        <>{users && <UsersTable users={users} />}</>
                    </PrivilegentRedirect>
                </div>
            </div>
        </main>
    );
}
