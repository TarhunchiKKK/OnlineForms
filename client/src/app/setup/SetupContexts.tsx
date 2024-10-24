import { ThemeContextProvider } from "@/features/dark-theme";
import { LocalizationContextProvider } from "@/features/localization";
import { UserPermissionsChangeContextProvider } from "@/features/roles-separation";
import { TSetupContextsProps } from "./types";

export function SetupContexts({ children }: TSetupContextsProps) {
    return (
        <ThemeContextProvider>
            <LocalizationContextProvider>
                <UserPermissionsChangeContextProvider>
                    {children}
                </UserPermissionsChangeContextProvider>
            </LocalizationContextProvider>
        </ThemeContextProvider>
    );
}
