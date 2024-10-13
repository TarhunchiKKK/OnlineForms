import { ChangeEvent } from "react";

export interface ITextAreaProps {
    label?: string;

    placeholder?: string;

    disabled?: boolean;

    value: string;

    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
