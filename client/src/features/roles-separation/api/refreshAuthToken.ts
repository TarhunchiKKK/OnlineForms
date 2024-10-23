import { createAuthHeaders } from "@/shared/helpers";
import { localStorageService } from "@/shared/services";
import axios from "axios";

export async function refreshAuthToken() {
    try {
        const authToken = localStorageService.auth.getAuthToken();

        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/refresh`, null, {
            headers: createAuthHeaders(authToken),
        });

        const { access } = response.data as { access: string };

        localStorageService.auth.setAuthToken(access);
    } catch (error: unknown) {
        console.log(error);
    }
}
