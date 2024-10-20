import { templatesApi } from "@/entities/templates";
import { localStorageService } from "@/shared/services";

export function useUserTemplates() {
    const authToken = localStorageService.auth.getAuthToken();

    const { data: templates } = templatesApi.useFindUserTemplatesQuery(authToken!);

    return { templates };
}
