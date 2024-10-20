import { Outlet } from "react-router-dom";

export function HomeLayout() {
    return (
        <main className="py-4">
            <div className="container mx-auto">
                <Outlet />
            </div>
        </main>
    );
}
