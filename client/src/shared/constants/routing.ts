export const routes = {
    Home: "/",

    Templates: "/templates",
    EditTemplate: "/templates/:templateId/edit",
    TemplateForms: "/templates/:templateId/forms",
    CreateForm: "/templates/:templateId/create-form",

    EditForm: "/templates/form/:formId/edit",

    SignIn: "/auth/sign-in",
    SignUp: "/auth/sign-up",

    Users: "/users",
    CurrentUserTemplates: "/users/me/templates",
    CurrentUserForms: "/users/me/forms",

    createEditTemplateRoute: (templateId: string) => {
        return `/templates/${templateId}/edit`;
    },

    createTemplateFormsRoute: (templateId: string) => {
        return `/templates/${templateId}/forms`;
    },

    createCreateFormRoute: (templateId: string) => {
        return `/templates/${templateId}/create-form`;
    },

    createEditFormRoute: (formId: string) => {
        return `/templates/form/${formId}/edit`;
    },
};
