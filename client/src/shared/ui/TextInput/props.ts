import { ChangeEvent } from "react";

export interface ITextInputProps {
    label: string;

    placeholder?: string;

    value: string;

    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
