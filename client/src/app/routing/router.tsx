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
    UsersPage,
    CurrentUserLayout,
    UserFormsPage,
    UserTemplatesPage,
} from "@/pages";
import { FormLayout } from "@/pages/layouts";

export const router = createBrowserRouter([
    {
        path: routes.Home,
        children: [
            {
                index: true,
                element: <TemplatesPage />,
            },
            {
                path: routes.Users,
                element: <UsersPage />,
            },
            {
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
                ],
            },
            {
                element: <FormLayout />,
                children: [
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
            {
                element: <CurrentUserLayout />,
                children: [
                    {
                        path: routes.CurrentUserTemplates,
                        element: <UserTemplatesPage />,
                    },
                    {
                        path: routes.CurrentUserForms,
                        element: <UserFormsPage />,
                    },
                ],
            },
        ],
    },
]);
