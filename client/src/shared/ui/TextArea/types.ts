import { ChangeEvent } from "react";

export interface ITextAreaProps {
    label?: string;

    placeholder?: string;

    value: string;

    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
