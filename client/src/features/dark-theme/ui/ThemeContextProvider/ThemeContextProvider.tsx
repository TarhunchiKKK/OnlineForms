import { TContextProps } from "./types";
import { ThemeProvider } from "@mui/material";
import { useThemeContext } from "./useThemeContext";
import { ThemeContext } from "./constants";

export function ThemeContextProvider({ children }: TContextProps) {
    const { theme, mode, toggleTheme } = useThemeContext();

    return (
        <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
}
