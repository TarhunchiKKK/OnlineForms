import { Provider } from "react-redux";
import { reduxStore } from "./redux";
import { SetupContexts } from "./setup";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";

export function App() {
    return (
        <Provider store={reduxStore}>
            <SetupContexts>
                <RouterProvider router={router} />
            </SetupContexts>
        </Provider>
    );
}
