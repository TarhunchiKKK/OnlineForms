import { Theme } from "@mui/material";
import { Themes } from "../../types";

export type TContextState = {
    mode: Themes;
    toggleTheme: () => void;
    theme: Theme;
};

export type TContextProps = {
    children: JSX.Element | JSX.Element[];
};
