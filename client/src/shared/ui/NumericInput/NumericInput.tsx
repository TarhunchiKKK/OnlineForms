import { inputClassName } from "@/shared/constants";
import { TNumericInputProps } from "./types";

export function NumericInput({ label, ...inputProps }: TNumericInputProps) {
    return (
        <>
            {label && <label className="text-lg min-w-max">{label}</label>}

            <input type="number" {...inputProps} className={inputClassName} />
        </>
    );
}
