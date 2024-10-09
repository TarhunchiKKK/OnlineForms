import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px]">
            <Outlet />
        </div>
    );
}
