import { createBrowserRouter } from "react-router-dom";
import { routes } from "@/shared/constants";
import {
    TemplatesPage,
    SignInPage,
    SignUpPage,
    AuthLayout,
    TemplateLayout,
    CreateTemplatePage,
    EditTemplatePage,
} from "@/pages";

export const router = createBrowserRouter([
    {
        path: routes.Home,
        children: [
            {
                index: true,
                element: <TemplatesPage />,
            },
            {
                path: routes.Auth,
                element: <AuthLayout />,
                children: [
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
            {
                path: routes.Template,
                element: <TemplateLayout />,
                children: [
                    {
                        path: routes.CreateTemplate,
                        element: <CreateTemplatePage />,
                    },
                    {
                        path: `${routes.EditTemplate}/:id`,
                        element: <EditTemplatePage />,
                    },
                ],
            },
        ],
    },
]);
