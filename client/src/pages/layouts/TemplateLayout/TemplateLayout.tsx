import { Outlet } from "react-router-dom";
import { contentWrapperClassName } from "@/shared/constants";
import { Tabs } from "@/widgets/routing";
import { PrivilegentRedirect } from "@/features/roles-separation";
import { useTemplateLayout } from "./useTemplateLayout";

export function TemplateLayout() {
    const { redirectProps, tabs } = useTemplateLayout();

    return (
        <main className="bg-green-primary px-6 py-4">
            <div className="mx-auto container">
                <PrivilegentRedirect {...redirectProps}>
                    <div className={`${contentWrapperClassName} bg-white mb-4`}>
                        <Tabs tabs={tabs} />
                    </div>

                    <Outlet />
                </PrivilegentRedirect>
            </div>
        </main>
    );
}
