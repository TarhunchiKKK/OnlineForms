import { createBrowserRouter } from "react-router-dom";
import { routes } from "@/shared/constants";
import { TemplatesPage, Layout, SignInPage, SignUpPage } from "@/pages";
import { CreateTemplatePage } from "@/pages/templates";

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
                path: routes.CreateTemplate,
                element: <CreateTemplatePage />,
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
