import { TFullTemplate, TTemplate } from "../../models";

export type TFindTemplatesQueryArgs = {
    page: number;

    limit: number;
};

export type TFindAllTemplatesResponse = (TTemplate & {
    description: string;

    createdAt: string;

    updatedAt: string;
})[];

export type TFindOneTemplateResponse = TFullTemplate & {
    description: string;

    createdAt: string;

    updatedAt: string;
};

export type TCreateResponse = TTemplate & {
    description: string;
};
