import { ChangeEvent } from "react";

export type TCheckboxProps = {
    label?: string;

    disabled?: boolean;

    isChecked: boolean;

    onCheck: (_: ChangeEvent<HTMLInputElement>) => void;
};
