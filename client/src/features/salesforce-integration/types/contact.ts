export type TSFContact = {
    Id: string;

    AccountId: string;

    Name: string;

    Phone: string;

    Email: string;
};

export type TCreateSFContactDto = {
    AccountId: string;

    LastName: string;

    Phone: string;

    Email: string;
};
