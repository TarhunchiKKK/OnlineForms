import { Provider } from "react-redux";
import { reduxStore } from "./redux";
import { Setup } from "./setup";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";

export function App() {
    return (
        <Provider store={reduxStore}>
            <Setup>
                <RouterProvider router={router} />
            </Setup>
        </Provider>
    );
}
