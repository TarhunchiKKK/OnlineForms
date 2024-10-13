import { Outlet } from "react-router-dom";

export function TemplateLayout() {
    return (
        <main className="bg-green-primary px-6 py-4">
            <div className="mx-auto container">
                <Outlet />
            </div>
        </main>
    );
}
