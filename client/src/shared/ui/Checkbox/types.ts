import { ChangeEvent } from "react";

export interface ICheckboxProps {
    label?: string;

    isChecked: boolean;

    onCheck: (_: ChangeEvent<HTMLInputElement>) => void;
}
