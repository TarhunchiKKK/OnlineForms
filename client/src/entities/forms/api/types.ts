import { TForm, TFullForm } from "../models";

export type TFindAllFormsResponse = (TForm & {
    createdAt: string;
})[];

export type TFindOneFormResponse = TFullForm & {
    createdAt: string;
};

export type TFindUserFormsQUeryArgs = {
    authToken: string;

    templateId?: string;
};
