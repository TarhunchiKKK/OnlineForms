import { TFullTemplate, TTemplate } from "../../models";

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

export type TLikeTemplateDto = {
    templateId: string;

    authToken: string;
};

export type TCheckIsLikedDto = {
    templateId: string;

    authToken: string;
};

export type TCheckIsLikedResponse = {
    liked: boolean;
};
