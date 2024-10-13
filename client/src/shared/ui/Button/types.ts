export type TButtonSize = "sm" | "md" | "lg";

export type TButtonProps = {
    size: TButtonSize;

    content: string;

    onClick?: () => void;
};
