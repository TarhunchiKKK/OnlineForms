import { ChangeEvent } from "react";

export interface INumericInputProps {
    label?: string;

    min?: number;

    max?: number;

    step?: number;

    value: number;

    onChange: (_: ChangeEvent<HTMLInputElement>) => void;
}
