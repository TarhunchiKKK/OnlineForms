export type TSignUpQueryArgs = {
    username: string | null;

    email: string;

    password: string | null;
};

export type TSignInQueryArgs = {
    email: string;

    password: string | null;
};
