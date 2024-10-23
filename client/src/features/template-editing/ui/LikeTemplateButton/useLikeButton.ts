import { templatesApi } from "@/entities/templates";
import { localStorageService } from "@/shared/services";
import { useParams } from "react-router-dom";

export function useLikeButton() {
    const { templateId } = useParams();

    const [likeTemplate] = templatesApi.useLikeMutation();

    const authToken = localStorageService.auth.getAuthToken();

    const { data } = templatesApi.useCheckIsLikedQuery({
        templateId: templateId!,
        authToken: authToken!,
    });

    const handleLike = () => {
        likeTemplate({
            templateId: templateId!,
            authToken: authToken!,
        });
    };

    return {
        isLiked: data?.liked ?? false,
        handleLike,
    };
}
