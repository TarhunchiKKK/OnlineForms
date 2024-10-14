import { templatesApi, TFullTemplate } from "@/entities/templates";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useCreateForm() {
    const [template, setTemplate] = useState<TFullTemplate | null>(null);

    const { id: templateId } = useParams();

    const [findTemplate] = templatesApi.useLazyFindOneQuery();

    useEffect(() => {
        async function fetchTemplate() {
            if (templateId) {
                const { data } = await findTemplate(templateId!);
                if (data) {
                    setTemplate(data);
                }
            }
        }

        fetchTemplate();
    }, [templateId, findTemplate]);

    return {
        template,
    };
}
