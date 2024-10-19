export const routes = {
    Home: "/",
    Templates: "/templates",
    EditTemplate: "/templates/:id/edit",
    TemplateForms: "/templates/:id/forms",

    CreateForm: "/templates/:id/create-form",
    EditForm: "/templates/form/:id/edit",

    Auth: "/auth",
    SignIn: "/auth/sign-in",
    SignUp: "/auth/sign-up",

    Users: "/users",

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
