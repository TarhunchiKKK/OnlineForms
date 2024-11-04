import { ModalOverlay } from "@/shared/ui";
import { createPortal } from "react-dom";
import { SalesForceForm } from "../SalesForceForm";
import { TSalesForceModalProps } from "./types";
import { useSalesForceModal } from "./useSalesForceModal";

export function SalesForceModal({ onClose }: TSalesForceModalProps) {
    const { user } = useSalesForceModal();

    return (
        <>
            {createPortal(
                <>
                    <ModalOverlay onClick={onClose} />

                    <div className="rounded-md w-1/3 px-4 py-8 bg-white dark:bg-black fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {user && <SalesForceForm user={user} onSubmit={onClose} />}
                    </div>
                </>,
                document.body,
            )}
        </>
    );
}
