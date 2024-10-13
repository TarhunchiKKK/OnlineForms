import { buttonSizeStyles } from "./constants";
import { TButtonProps } from "./types";

export function Button({ size, content, onClick }: TButtonProps) {
    const sizeStyles = buttonSizeStyles[size];

    return (
        <button
            onClick={onClick}
            className={`${sizeStyles} rounded-md text-white bg-green-secondary hover:bg-green-secondary-hover cursor-pointer`}
        >
            {content}
        </button>
    );
}
