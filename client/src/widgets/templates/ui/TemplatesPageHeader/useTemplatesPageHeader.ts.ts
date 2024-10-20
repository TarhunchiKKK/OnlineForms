import { useNavigate } from "react-router-dom";
import { templatesApi } from "@/entities/templates";
import { routes } from "@/shared/constants";
import { localStorageService } from "@/shared/services";

export function useTemplatesPageHeader() {
    const navigate = useNavigate();
    const [createDefaultTemplate] = templatesApi.useCreateDefaultMutation();

    const authToken = localStorageService.auth.getAuthToken();

    const handleCreateTemplate = async () => {
        const { data: template } = await createDefaultTemplate(authToken!);

        if (template) {
            const route = routes.createEditTemplateRoute(template.id);
            navigate(route);
        }
    };

    const handleAuth = () => {
        const route = authToken ? routes.CurrentUserTemplates : routes.SignIn;
        navigate(route);
    };

    return { handleCreateTemplate, authToken, handleAuth };
}
