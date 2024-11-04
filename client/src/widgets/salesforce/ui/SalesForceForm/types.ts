export type TUserData = {
    id: string;

    username: string | null;

    email: string;
};

export type TSalesForceFormProps = {
    user: TUserData;

    onSubmit: () => void;
};

export type TFormState = {
    phone: string;

    country: string;

    city: string;

    street: string;
};
