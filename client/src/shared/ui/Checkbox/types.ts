import { ChangeEvent } from "react";

export interface ICheckboxProps {
    label?: string;

    disabled?: boolean;

    isChecked: boolean;

    onCheck: (_: ChangeEvent<HTMLInputElement>) => void;
}
