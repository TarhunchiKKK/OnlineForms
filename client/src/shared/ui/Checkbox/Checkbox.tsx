import { ICheckboxProps } from "./types";

export function Checkbox({ label, disabled, isChecked, onCheck }: ICheckboxProps) {
    return (
        <label className="cursor-pointer">
            <input
                type="checkbox"
                disabled={disabled}
                checked={isChecked}
                onChange={onCheck}
                className="inline-block mr-3"
            />

            {label && <span>{label}</span>}
        </label>
    );
}
