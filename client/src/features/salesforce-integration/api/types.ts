export type TCreateSFAccountResponse = {
    errors: string[];
    id: string;
    success: boolean;
};

export type TCreateSFContactResponse = {
    errors: string[];
    id: string;
    success: boolean;
};

export type TCreateSFContactDto = {
    AccountId: string;

    LastName: string;

    Phone: string;

    Email: string;
};

export type TCreateSFAccountDto = {
    Name: string;

    BillingCountry: string;

    BillingCity: string;

    BillingStreet: string;
};
