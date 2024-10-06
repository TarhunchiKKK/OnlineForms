export interface IDropdownProps {
    label?: string;

    options: { value: string; label: string }[];

    value: string;

    onSelect: (_: string) => void;
}
