export type TButtonSize = "sm" | "md" | "lg";

export interface IButtonProps {
    size: TButtonSize;

    content: string;

    onClick?: () => void;
}
