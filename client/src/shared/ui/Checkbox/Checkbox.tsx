import { TCheckboxProps } from "./types";

export function Checkbox({ label, disabled, isChecked, onCheck }: TCheckboxProps) {
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
