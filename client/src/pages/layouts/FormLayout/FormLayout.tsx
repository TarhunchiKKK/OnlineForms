import { Outlet } from "react-router-dom";
import { useFormLayout } from "./useFormLayout";
import { Tabs } from "@/widgets/routing";
import { contentWrapperClassName } from "@/shared/constants";

export function FormLayout() {
    const { tabs } = useFormLayout();

    return (
        <main className="px-6 py-4">
            <div className="mx-auto container">
                <div className={`${contentWrapperClassName} mb-4`}>
                    <Tabs tabs={tabs} />
                </div>

                <Outlet />
            </div>
        </main>
    );
}
