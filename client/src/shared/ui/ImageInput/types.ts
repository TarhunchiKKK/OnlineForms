import { ChangeEvent } from "react";

export type TImageInputProps = {
    label?: string;

    placeholder?: string;

    value: string;

    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    disabled?: boolean;
};
