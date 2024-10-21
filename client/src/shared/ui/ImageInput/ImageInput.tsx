import { inputClassName } from "@/shared/constants";
import { TImageInputProps } from "./types";
import { DefaultImage } from "@/shared/assets";

export function ImageInput({ label, ...inputProps }: TImageInputProps) {
    return (
        <>
            {label && (
                <label className="text-lg text-white font-medium block mb-[6px]">{label}</label>
            )}

            <input type="text" {...inputProps} className={inputClassName} />

            <div className="w-min">
                <img src={inputProps.value || DefaultImage} alt="" />
            </div>
        </>
    );
}
