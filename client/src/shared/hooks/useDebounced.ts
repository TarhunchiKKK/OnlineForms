import { useEffect, useState } from "react";

export function useDebounced<Type>(value: Type, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<Type>(value);

    useEffect(() => {
        const timerId = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timerId);
    });

    return debouncedValue;
}
