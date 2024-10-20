import { usersApi } from "@/entities/users";
import { routes } from "@/shared/constants";
import { localStorageService } from "@/shared/services";
import { useNavigate } from "react-router-dom";

export function useCurrentUser() {
    const navigate = useNavigate();

    const authToken = localStorageService.auth.getAuthToken();

    const { data: user } = usersApi.useFindMeQuery(authToken!);

    const handleSignOut = () => {
        localStorageService.auth.removeAuthToken();
        navigate(routes.SignIn);
    };

    return { user, handleSignOut };
}
