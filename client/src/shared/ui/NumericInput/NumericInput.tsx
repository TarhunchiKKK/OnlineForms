import { INumericInputProps } from "./types";

export function NumericInput({ label, ...inputProps }: INumericInputProps) {
    return (
        <div className="flex flex-row justify-between items-center gap-3">
            {label && <label className="text-lg">{label}</label>}

            <input
                type="number"
                {...inputProps}
                className="w-20 px-2 py-1 text-lg rounded-md outline-none border-[1px] border-gray"
            />
        </div>
    );
}
