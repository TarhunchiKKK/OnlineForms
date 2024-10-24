import { Provider } from "react-redux";
import { reduxStore } from "./redux";
import { Setup } from "./setup";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { UserPermissionsChangeContextProvider } from "@/features/roles-separation";
import { ThemeContextProvider } from "@/features/dark-theme";
import { LocalizationContextProvider } from "@/features/localization";

export function App() {
    return (
        <Provider store={reduxStore}>
            <Setup>
                <ThemeContextProvider>
                    <LocalizationContextProvider>
                        <UserPermissionsChangeContextProvider>
                            <RouterProvider router={router} />
                        </UserPermissionsChangeContextProvider>
                    </LocalizationContextProvider>
                </ThemeContextProvider>
            </Setup>
        </Provider>
    );
}
