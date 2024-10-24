import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Themes } from "../../types";
import { iconProps } from "./constants";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContextProvider/constants";

export function ThemeSwitcher() {
    const { mode, toggleTheme } = useContext(ThemeContext);

    const isDarkMode = mode === Themes.Dark;

    return (
        <button title={isDarkMode ? "Set light" : "Set dark"} onClick={toggleTheme}>
            {isDarkMode ? (
                <MdOutlineLightMode {...iconProps} />
            ) : (
                <MdOutlineDarkMode {...iconProps} />
            )}
        </button>
    );
}
