import { ITextInputProps } from "./types";

export function TextInput({ label, placeholder, value, onChange }: ITextInputProps) {
    return (
        <>
            <label className="text-lg text-white font-medium block mb-[6px]">{label}</label>

            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 text-lg rounded-md outline-none border-none"
            />
        </>
    );
}
