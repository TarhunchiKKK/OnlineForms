import { formsApi } from "@/entities/forms";
import { localStorageService } from "@/shared/services";

export function useUserForms() {
    const authToken = localStorageService.auth.getAuthToken();

    const { data: forms } = formsApi.useFindUserFormsQuery(authToken!);

    return { forms };
}
