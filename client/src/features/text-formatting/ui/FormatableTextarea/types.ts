import { Descendant } from "slate";

export interface IFormatableTextareaProps {
    value: Descendant[];

    onChange: (value: Descendant[]) => void;

    disabled: boolean;
}
