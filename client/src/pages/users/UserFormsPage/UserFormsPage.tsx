import { FormsTable } from "@/widgets/forms";
import { useUserForms } from "./useUserForms";
import { contentWrapperClassName } from "@/shared/constants";

export function UserFormsPage() {
    const { forms } = useUserForms();

    return <div className={contentWrapperClassName}>{forms && <FormsTable forms={forms} />}</div>;
}
