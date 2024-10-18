import { createBrowserRouter } from "react-router-dom";
import { routes } from "@/shared/constants";
import {
    TemplatesPage,
    SignInPage,
    SignUpPage,
    AuthLayout,
    TemplateLayout,
    EditTemplatePage,
    CreateFormPage,
    EditFormPage,
    TemplateFormsPage,
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
                path: routes.Templates,
                element: <TemplateLayout />,
                children: [
                    {
                        path: routes.EditTemplate,
                        element: <EditTemplatePage />,
                    },
                    {
                        path: routes.TemplateForms,
                        element: <TemplateFormsPage />,
                    },
                    {
                        path: routes.CreateForm,
                        element: <CreateFormPage />,
                    },
                    {
                        path: routes.EditForm,
                        element: <EditFormPage />,
                    },
                ],
            },
        ],
    },
]);
