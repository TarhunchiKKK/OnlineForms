import { Provider } from "react-redux";
import { reduxStore } from "./redux";
import { Setup } from "./setup";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { UserPermissionsChangeContextProvider } from "@/features/roles-separation";

export function App() {
    return (
        <Provider store={reduxStore}>
            <Setup>
                <UserPermissionsChangeContextProvider>
                    <RouterProvider router={router} />
                </UserPermissionsChangeContextProvider>
            </Setup>
        </Provider>
    );
}
