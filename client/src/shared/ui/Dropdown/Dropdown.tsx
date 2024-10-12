import { useState } from "react";
import { IDropdownProps } from "./types";
import { inputClassName } from "@/shared/constants";

export function Dropdown({ label, options, value, onSelect }: IDropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleChangeVisibility = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            {label && <label>{label}</label>}

            <button onClick={handleChangeVisibility} className={`${inputClassName} relative`}>
                {value}

                {isOpen && (
                    <ul
                        onMouseLeave={handleChangeVisibility}
                        className="absolute z-50 -top-4 left-0 w-full rounded-md border-gray bg-gray-100"
                    >
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => onSelect(option.value)}
                                className="px-4 py-3 border-b-[1px] border-gray-200 hover:bg-gray-200 last:border-none"
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </button>
        </>
    );
}
