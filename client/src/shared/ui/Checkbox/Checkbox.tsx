import { ICheckboxProps } from "./types";

export function Checkbox({ label, isChecked, onCheck }: ICheckboxProps) {
    return (
        <label className="cursor-pointer">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onCheck}
                className="inline-block mr-3"
            />

            {label && <span>{label}</span>}
        </label>
    );
}
