import { ChangeEvent } from "react";

export interface INumericInputProps {
    label?: string;

    disabled?: boolean;

    min?: number;

    max?: number;

    step?: number;

    value: number;

    onChange: (_: ChangeEvent<HTMLInputElement>) => void;
}
