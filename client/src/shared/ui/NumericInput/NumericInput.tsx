import { inputClassName } from "@/shared/constants";
import { TNumericInputProps } from "./types";

export function NumericInput({ label, ...inputProps }: TNumericInputProps) {
    return (
        <div className="flex flex-row justify-between items-center gap-3">
            {label && <label className="text-lg">{label}</label>}

            <input type="number" {...inputProps} className={inputClassName} />
        </div>
    );
}
