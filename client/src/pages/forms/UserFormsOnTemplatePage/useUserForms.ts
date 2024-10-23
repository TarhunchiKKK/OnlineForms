import { formsApi } from "@/entities/forms";
import { localStorageService } from "@/shared/services";
import { useParams } from "react-router-dom";

export function useUserForms() {
    const { templateId } = useParams();

    const authToken = localStorageService.auth.getAuthToken();

    const { data: forms } = formsApi.useFindUserFormsQuery({
        authToken: authToken!,
        templateId,
    });

    return { forms };
}
