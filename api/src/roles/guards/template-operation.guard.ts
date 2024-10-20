import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { RolesService } from "../roles.service";
import { ProvidesOperation } from "../decorators/provides-operation.decorator";
import { OperationsOnTheTemplate } from "../enums/templates";
import { TAuthorizedRequest } from "src/auth/types/request";

@Injectable()
export class TemplateOperationGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly rolesService: RolesService,
    ) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const { operation, requestParams, userProfile } = this.getMetadata(context);

        if (!operation) {
            return true;
        }

        return await this.rolesService.checkTemplateOperationAvailability({
            userId: userProfile.id,
            templateId: requestParams?.templateId,
            operation: operation as OperationsOnTheTemplate,
        });
    }

    public getMetadata(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest() as TAuthorizedRequest;

        const userProfile = request.user;

        const requestParams = request.params;

        const operation = this.reflector.get(ProvidesOperation, context.getHandler());

        return {
            userProfile,
            operation,
            requestParams,
        };
    }
}
