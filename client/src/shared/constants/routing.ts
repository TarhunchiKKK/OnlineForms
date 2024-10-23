export const routes = {
    Home: "/",

    Templates: "/templates",

    EditTemplate: "/templates/:templateId/edit",
    TemplateForms: "/templates/:templateId/forms",
    TemplateSettings: "/templates/:templateId/settings",

    CreateForm: "/templates/:templateId/create-form",
    UserFormsOnTemplate: "/templates/:templateId/your-answers",

    EditForm: "/forms/:formId/edit",

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

    createTemplateSettingsRoute: (templateId: string) => {
        return `/templates/${templateId}/settings`;
    },

    createCreateFormRoute: (templateId: string) => {
        return `/templates/${templateId}/create-form`;
    },

    createUserFormsOnTemplateRoute: (templateId: string) => {
        return `/templates/${templateId}/your-answers`;
    },

    createEditFormRoute: (formId: string) => {
        return `/forms/${formId}/edit`;
    },
};
