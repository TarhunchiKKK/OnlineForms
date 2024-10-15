import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { Provider } from "react-redux";
import { reduxStore } from "./redux";

export function App() {
    return (
        <Provider store={reduxStore}>
            <RouterProvider router={router} />
        </Provider>
    );
}
