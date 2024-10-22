import { FormsTable } from "@/widgets/forms";
import { useTemplateFormsPage } from "./useTemplateForms";

export function TemplateFormsPage() {
    const { forms } = useTemplateFormsPage();

    return (
        <div className="px-6 py-4 shadow-md bg-white rounded-xl mb-6">
            {forms && <FormsTable forms={forms} />}
        </div>
    );
}
