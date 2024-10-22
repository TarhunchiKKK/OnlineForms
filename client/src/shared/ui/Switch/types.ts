import { ChangeEvent } from "react";

export type TSwitchProps = {
    label?: string;

    disabled?: boolean;

    checked: boolean;

    onChange: (_: ChangeEvent<HTMLInputElement>) => void;
};
