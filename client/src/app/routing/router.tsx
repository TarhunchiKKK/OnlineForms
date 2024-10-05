import { createBrowserRouter } from "react-router-dom";
import { routes } from "@/shared/constants";
import { TemplatesPage, Layout, SignInPage, SignUpPage } from "@/pages";

export const router = createBrowserRouter([
    {
        path: routes.Home,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <TemplatesPage />,
            },
            {
                path: routes.SignUp,
                element: <SignUpPage />,
            },
            {
                path: routes.SignIn,
                element: <SignInPage />,
            },
        ],
    },
]);
