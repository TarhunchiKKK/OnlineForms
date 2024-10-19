import { UsersTable } from "@/widgets/users";
import { useUsers } from "./useUsers";

export function UsersPage() {
    const { users } = useUsers();

    return (
        <main className="py-4">
            <div className="container mx-auto">
                <div className="px-6 py-4 shadow-md rounded-xl">
                    <UsersTable users={users} />
                </div>
            </div>
        </main>
    );
}
