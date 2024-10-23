import { TTemplate } from "@/entities/templates";
import { TForm, TFullForm } from "../models";

export type TFindAllFormsResponse = (TForm & {
    createdAt: string;
})[];

export type TFindOneFormResponse = TFullForm & {
    createdAt: string;

    template: TTemplate & {
        description: string;
    };
};

export type TFindUserFormsQUeryArgs = {
    authToken: string;

    templateId?: string;
};
