import { TModalOverlayProps } from "./types";

export function ModalOverlay({ onClick }: TModalOverlayProps) {
    return (
        <div
            onClick={onClick}
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 flex justify-center items-center"
        ></div>
    );
}
