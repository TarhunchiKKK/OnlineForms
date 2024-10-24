import { Themes } from "../../types";

export const setTailwindTheme = (theme: Themes) => {
    const anotherTheme = theme === Themes.Light ? Themes.Dark : Themes.Light;
    document.documentElement.classList.add(theme);
    document.documentElement.classList.remove(anotherTheme);
};
