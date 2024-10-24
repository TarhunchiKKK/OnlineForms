import { useState } from "react";
import { TContextProps } from "./types";
import { localStorageService } from "@/shared/services";
import { defaultLocale, LocalizationContext } from "./constants";
import { IntlProvider } from "react-intl";
import { messages } from "../../constants";
import { Locales } from "../../types";

export function LocalizationContextProvider({ children }: TContextProps) {
    const localStorageLocale = localStorageService.locale.getLocale() ?? defaultLocale;

    const [locale, setLocale] = useState(localStorageLocale);

    const handleSetLocale = (newLocale: Locales) => {
        setLocale(newLocale);

        localStorageService.locale.setLocale(newLocale);
    };

    return (
        <LocalizationContext.Provider value={{ locale, setLocale: handleSetLocale }}>
            <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={defaultLocale}>
                {children}
            </IntlProvider>
        </LocalizationContext.Provider>
    );
}
