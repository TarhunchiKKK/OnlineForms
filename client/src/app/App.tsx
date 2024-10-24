import { Provider } from "react-redux";
import { reduxStore } from "./redux";
import { Setup } from "./setup";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { UserPermissionsChangeContextProvider } from "@/features/roles-separation";
import { ThemeContextProvider } from "@/features/dark-theme";
import { IntlProvider } from "react-intl";

export function App() {
    return (
        <Provider store={reduxStore}>
            <Setup>
                <ThemeContextProvider>
                    <IntlProvider locale="en" defaultLocale="en">
                        <UserPermissionsChangeContextProvider>
                            <RouterProvider router={router} />
                        </UserPermissionsChangeContextProvider>
                    </IntlProvider>
                </ThemeContextProvider>
            </Setup>
        </Provider>
    );
}
