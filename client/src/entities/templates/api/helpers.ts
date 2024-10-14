import { Descendant } from "slate";
import { TFullTemplate, TTemplate } from "../models";
import { TFindAllTemplatesResponse, TFindOneTemplateResponse } from "./types";

export function transformFindAllResponse(response: TFindAllTemplatesResponse): TTemplate[] {
    return response.map((template) => ({
        ...template,
        description: JSON.parse(template.description) as Descendant[],
        createdAt: new Date(template.createdAt),
        updatedAt: new Date(template.updatedAt),
    }));
}

export function transformFindOneResponse(response: TFindOneTemplateResponse): TFullTemplate {
    return {
        ...response,
        description: JSON.parse(response.description) as Descendant[],
        createdAt: new Date(response.createdAt),
        updatedAt: new Date(response.updatedAt),
    };
}
