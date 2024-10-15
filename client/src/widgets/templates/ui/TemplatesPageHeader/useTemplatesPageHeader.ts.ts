import { templatesApi } from "@/entities/templates";
import { routes } from "@/shared/constants";
import { localStorageService } from "@/shared/services";
import { useNavigate } from "react-router-dom";

export function useTemplatesPageHeader() {
    const navigate = useNavigate();
    const [createDefaultTemplate] = templatesApi.useCreateDefaultMutation();

    const handleCreateTemplate = async () => {
        const authToken = localStorageService.auth.getAuthToken();

        const { data: template } = await createDefaultTemplate(authToken!);

        if (template) {
            navigate(`${routes.EditTemplate}/${template.id}`);
        }
    };

    return { handleCreateTemplate };
}
