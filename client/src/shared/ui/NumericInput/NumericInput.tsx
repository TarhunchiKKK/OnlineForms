import { inputClassName } from "@/shared/constants";
import { INumericInputProps } from "./types";

export function NumericInput({ label, ...inputProps }: INumericInputProps) {
    return (
        <div className="flex flex-row justify-between items-center gap-3">
            {label && <label className="text-lg">{label}</label>}

            <input type="number" {...inputProps} className={inputClassName} />
        </div>
    );
}
