import { usersApi } from "@/entities/users";
import { localStorageService } from "@/shared/services";
import { useState } from "react";

export function useSFModal() {
    const authToken = localStorageService.auth.getAuthToken();

    const { data: user } = usersApi.useFindMeQuery(authToken!);

    const [isSFModalOpen, setIsSFModalOpen] = useState(false);

    return {
        isOpen: isSFModalOpen,
        open: () => setIsSFModalOpen(true),
        close: () => setIsSFModalOpen(false),
        isAvailable: user?.sfAccountId === null,
    };
}