export type TSFAccount = {
    Id: string;

    Name: string;

    BillingCountry: string;

    BillingCity: string;

    BillingStreet: string;
};

export type TCreateSFAccountDto = {
    Name: string;

    BillingCountry: string;

    BillingCity: string;

    BillingStreet: string;
};
