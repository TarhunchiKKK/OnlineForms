import { useEffect, useMemo, useState } from "react";
import { Themes } from "../../types";
import { setTailwindTheme } from "./helpers";
import { createTheme } from "@mui/material";
import { theme } from "./constants";
import { localStorageService } from "@/shared/services";

export function useThemeContext() {
    const localStorageTheme = localStorageService.theme.getTheme() ?? Themes.Light;

    const [mode, setMode] = useState<Themes>(localStorageTheme);

    useEffect(() => {
        setTailwindTheme(localStorageTheme);
    });

    const setTheme = (newTheme: Themes) => {
        setMode(newTheme);

        setTailwindTheme(newTheme);

        localStorageService.theme.setTheme(newTheme);
    };

    const toggleTheme = () => {
        const nextTheme = mode === Themes.Light ? Themes.Dark : Themes.Light;

        setTheme(nextTheme);
    };

    const modifiedTheme = useMemo(() => {
        return createTheme({
            ...theme,
            palette: {
                ...theme.palette,
                mode,
            },
        });
    }, [mode]);

    return {
        theme: modifiedTheme,
        mode,
        toggleTheme,
    };
}
