import { UsersTable } from "@/widgets/users";
import { useUsers } from "./useUsers";
import { contentWrapperClassName } from "@/shared/constants";

export function UsersPage() {
    const { users } = useUsers();

    console.log(users);

    return (
        <main className="py-4">
            <div className="container mx-auto">
                <div className={contentWrapperClassName}>
                    {users && <UsersTable users={users} />}
                </div>
            </div>
        </main>
    );
}
