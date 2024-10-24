import { useParams } from "react-router-dom";
import { useCreateTabs } from "./helpers";

export function useFormLayout() {
    const { templateId } = useParams();

    const tabs = useCreateTabs(templateId!);

    return { tabs };
}
