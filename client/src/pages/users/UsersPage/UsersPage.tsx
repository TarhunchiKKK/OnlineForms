import { UsersTable } from "@/widgets/users";
import { useUsers } from "./useUsers";

export function UsersPage() {
    const { users } = useUsers();

    return (
        <main className="py-4">
            <div className="container mx-auto">
                <UsersTable users={users} />
            </div>
        </main>
    );
}
