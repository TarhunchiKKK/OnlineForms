import { inputClassName } from "@/shared/constants";
import { ITextAreaProps } from "./types";

export function TextArea({ label, placeholder, value, onChange }: ITextAreaProps) {
    return (
        <>
            {label && (
                <label className="text-lg text-white font-medium block mb-[6px]">{label}</label>
            )}

            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={inputClassName}
            />
        </>
    );
}
