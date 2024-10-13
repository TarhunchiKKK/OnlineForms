import { ChangeEvent } from "react";

export type TTextInputProps = {
    label?: string;

    placeholder?: string;

    value: string;

    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    disabled?: boolean;
};
