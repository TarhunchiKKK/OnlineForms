import { contentWrapperClassName } from "@/shared/constants";
import { useUserForms } from "./useUserForms";
import { FormsTable } from "@/widgets/forms";

export function UserFormsOnTemplatePage() {
    const { forms } = useUserForms();

    return (
        <div className={contentWrapperClassName}>
            {forms && <FormsTable forms={forms} sortable />}
        </div>
    );
}
