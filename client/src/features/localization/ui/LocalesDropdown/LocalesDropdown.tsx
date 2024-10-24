import { Dropdown } from "@/shared/ui";
import { useContext } from "react";
import { LocalizationContext } from "../../utils";
import { options } from "./constants";
import { Locales } from "../../types";

export function LocalesDropdown() {
    const { locale, setLocale } = useContext(LocalizationContext);

    const handleSelectLocale = (newLocale: string) => {
        setLocale(newLocale as Locales);
    };

    return <Dropdown value={locale} onSelect={handleSelectLocale} options={options} />;
}
