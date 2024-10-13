import { ChangeEvent } from "react";

export type TTextAreaProps = {
    label?: string;

    placeholder?: string;

    disabled?: boolean;

    value: string;

    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};
