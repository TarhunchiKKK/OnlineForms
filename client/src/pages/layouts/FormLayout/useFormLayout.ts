import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { createTabs } from "./helpers";

export function useFormLayout() {
    const { templateId } = useParams();

    const tabs = useMemo(() => createTabs(templateId!), [templateId]);

    return { tabs };
}
