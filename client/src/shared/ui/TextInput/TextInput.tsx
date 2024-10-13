import { inputClassName } from "@/shared/constants";
import { ITextInputProps } from "./types";

export function TextInput({ label, ...inputProps }: ITextInputProps) {
    return (
        <>
            {label && (
                <label className="text-lg text-white font-medium block mb-[6px]">{label}</label>
            )}

            <input type="text" {...inputProps} className={inputClassName} />
        </>
    );
}
