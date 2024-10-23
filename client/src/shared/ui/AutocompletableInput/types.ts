import { HTMLAttributes, ReactNode } from "react";

export type TAutocompletableInputProps<Type> = {
    options: Type[];

    onChange: (value: Type | null) => void;

    renderOption: (_: HTMLAttributes<HTMLLIElement>, __: Type) => ReactNode;

    getOptionLabel: (_: Type) => string;

    onSubmit?: (_: string) => void;

    onInputChange?: (_: string) => void;
};
