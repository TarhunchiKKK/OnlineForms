import { ChangeEvent } from "react";

export type TNumericInputProps = {
    label?: string;

    disabled?: boolean;

    min?: number;

    max?: number;

    step?: number;

    value: number;

    onChange: (_: ChangeEvent<HTMLInputElement>) => void;
};
