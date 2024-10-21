import { inputClassName } from "@/shared/constants";
import { TImageInputProps } from "./types";
import { DefaultImage } from "@/shared/assets";

export function ImageInput({ label, ...inputProps }: TImageInputProps) {
    return (
        <>
            {label && (
                <label className="text-lg text-white font-medium block mb-[6px]">{label}</label>
            )}

            {!inputProps.disabled && (
                <input type="text" {...inputProps} className={inputClassName} />
            )}

            {inputProps.value && (
                <div className="mt-4">
                    <img src={inputProps.value || DefaultImage} alt="" />
                </div>
            )}
        </>
    );
}
