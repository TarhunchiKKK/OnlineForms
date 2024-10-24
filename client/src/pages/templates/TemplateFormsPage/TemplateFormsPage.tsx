import { FormsTable } from "@/widgets/forms";
import { useTemplateFormsPage } from "./useTemplateForms";
import { contentWrapperClassName } from "@/shared/constants";

export function TemplateFormsPage() {
    const { forms } = useTemplateFormsPage();

    return (
        <div className={`${contentWrapperClassName} px-6 py-4`}>
            {forms && <FormsTable forms={forms} />}
        </div>
    );
}
