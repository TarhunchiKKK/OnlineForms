import { Descendant } from "slate";
import { TForm, TFullForm } from "../models";
import { TFindAllFormsResponse, TFindOneFormResponse } from "./types";

export function transformFindAllResponse(response: TFindAllFormsResponse): TForm[] {
    return response.map((template) => ({
        ...template,

        createdAt: new Date(template.createdAt),
    }));
}

export function transformFindOneResponse(response: TFindOneFormResponse): TFullForm {
    return {
        ...response,
        createdAt: new Date(response.createdAt),
        template: {
            ...response.template,
            description: JSON.parse(response.template.description) as Descendant[],
        },
    };
}
