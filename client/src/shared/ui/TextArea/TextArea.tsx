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
                className="w-full px-4 py-3 text-lg rounded-md outline-none border-none bg-gray-100"
            />
        </>
    );
}
