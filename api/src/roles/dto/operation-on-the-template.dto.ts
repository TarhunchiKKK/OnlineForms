import { OperationsOnTheTemplate } from "../enums/templates";

export class OperationOnTheTemplateDto {
    userId: string;

    templateId?: string;

    operation: OperationsOnTheTemplate;
}
