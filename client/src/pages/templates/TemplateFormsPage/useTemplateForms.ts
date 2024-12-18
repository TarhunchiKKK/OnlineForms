import { formsApi } from "@/entities/forms";
import { useParams } from "react-router-dom";

export function useTemplateFormsPage() {
    const { templateId } = useParams();

    const { data: forms } = formsApi.useFindAllByTemplateIdQuery(templateId!);

    return { forms };
}
