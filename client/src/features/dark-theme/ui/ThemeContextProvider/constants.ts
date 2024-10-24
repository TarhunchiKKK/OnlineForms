import { createTheme } from "@mui/material";
import { Themes } from "../../types";
import { TContextState } from "./types";
import { localStorageService } from "@/shared/services";
import { createContext } from "react";

export const theme = {
    palette: {},
};

export const initialState: TContextState = {
    mode: localStorageService.theme.getTheme() ?? Themes.Light,
    toggleTheme: () => {},
    theme: createTheme(),
};

export const ThemeContext = createContext(initialState);
