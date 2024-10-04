import { IButtonProps } from "./props";

export function Button({ content, onClick }: IButtonProps) {
    return (
        <button
            onClick={onClick}
            className="px-8 py-3 rounded-md text-xl text-white bg-green-secondary hover:bg-green-secondary-hover cursor-pointer"
        >
            {content}
        </button>
    );
}
