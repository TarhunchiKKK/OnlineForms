import axios from "axios";
import { TSIgnInResponse } from "./types";

export async function authWithProviderData(email: string, username: string | null) {
    try {
        const response = await axios.post<TSIgnInResponse>(
            `${import.meta.env.VITE_SERVER_URL}/auth/provider`,
            {
                email,
                username,
            },
        );

        return response.data;
    } catch (error: unknown) {
        console.error(error);
        return null;
    }
}
