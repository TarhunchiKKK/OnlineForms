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
    UserFormsOnTemplatePage,
    TemplateSettingsPage,
} from "@/pages";
import { FormLayout } from "@/pages/layouts";
import { TemplateDocumentLayout } from "@/shared/utils";

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
                element: (
                    <TemplateDocumentLayout>
                        <TemplateLayout />
                    </TemplateDocumentLayout>
                ),
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
                        path: routes.TemplateSettings,
                        element: <TemplateSettingsPage />,
                    },
                ],
            },
            {
                element: (
                    <TemplateDocumentLayout>
                        <FormLayout />
                    </TemplateDocumentLayout>
                ),
                children: [
                    {
                        path: routes.CreateForm,
                        element: <CreateFormPage />,
                    },
                    {
                        path: routes.UserFormsOnTemplate,
                        element: <UserFormsOnTemplatePage />,
                    },
                ],
            },
            {
                path: routes.EditForm,
                element: (
                    <TemplateDocumentLayout>
                        <EditFormPage />
                    </TemplateDocumentLayout>
                ),
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
