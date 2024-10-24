import { createContext } from "react";
import { TContextState } from "./types";
import { Locales } from "../../types";

export const defaultLocale = Locales.English;

const initialState: TContextState = {
    locale: defaultLocale,
    setLocale: () => {},
};

export const LocalizationContext = createContext(initialState);
