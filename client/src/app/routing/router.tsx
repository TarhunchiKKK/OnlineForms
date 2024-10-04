import { SignInPage, SignUpPage } from "@/pages";
import { routes } from "@/shared/constants";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: routes.Home,
        element: <div>Home Page</div>,
    },
    {
        path: routes.SignUp,
        element: <SignUpPage />,
    },
    {
        path: routes.SignIn,
        element: <SignInPage />,
    },
]);
