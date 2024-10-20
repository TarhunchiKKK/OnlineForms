import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ProvidesOperation } from "../decorators/provides-operation.decorator";
import { OperationsOnTheAccounts } from "../enums/accounts";
import { RolesService } from "../roles.service";
import { TAuthorizedRequest } from "src/auth/types/request";

@Injectable()
export class AccountOperationGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly rolesService: RolesService,
    ) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const { operation, requestParams, userProfile } = this.getMetadata(context);

        if (!operation) {
            return true;
        }

        return await this.rolesService.checkAccountOperationAvailability({
            userId: userProfile.id,
            accountId: requestParams?.userId,
            operation: operation as OperationsOnTheAccounts,
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
