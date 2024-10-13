import { inputClassName } from "@/shared/constants";
import { TTextAreaProps } from "./types";

export function TextArea({ label, ...inputProps }: TTextAreaProps) {
    return (
        <>
            {label && (
                <label className="text-lg text-white font-medium block mb-[6px]">{label}</label>
            )}

            <textarea {...inputProps} className={inputClassName} />
        </>
    );
}
