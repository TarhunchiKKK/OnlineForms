import { Locales } from "../../types";

export type TContextProps = {
    children: JSX.Element | JSX.Element[];
};

export type TContextState = {
    locale: Locales;

    setLocale: (_: Locales) => void;
};
