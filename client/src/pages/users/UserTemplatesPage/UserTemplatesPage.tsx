import { TemplatesTable } from "@/widgets/templates";
import { useUserTemplates } from "./useUserTemplates";
import { contentWrapperClassName } from "@/shared/constants";

export function UserTemplatesPage() {
    const { templates } = useUserTemplates();

    return (
        <div className={contentWrapperClassName}>
            {templates && <TemplatesTable templates={templates} />}
        </div>
    );
}
