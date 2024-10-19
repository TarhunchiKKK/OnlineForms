import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { RolesService } from "../roles.service";
import { Reflector } from "@nestjs/core";
import { TUserProfile } from "src/auth/types/user-profile.type";
import { ProvidesOperation } from "../decorators/provides-operation.decorator";
import { OperationsOnTheAccounts } from "../enums/accounts";
import { TOperations } from "../types/operations";

const operationsOnTheAccount = Object.values(OperationsOnTheAccounts) as TOperations[];

@Injectable()
export class OperationPermissionsGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly rolesService: RolesService,
    ) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const { operation, requestBody, userProfile } = this.getMetadata(context);

        if (!operation) {
            return true;
        }

        if (operationsOnTheAccount.includes(operation)) {
            return await this.rolesService.checkAccountOperationAvailability({
                userId: userProfile.id,
                accountId: requestBody?.accountId,
                operation: operation as OperationsOnTheAccounts,
            });
        }

        return true;
    }

    public getMetadata(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        const userProfile = request.user as TUserProfile;

        const operation = this.reflector.get(ProvidesOperation, context.getHandler());

        const requestBody = context.getArgs()[0].body;

        return {
            userProfile,
            operation,
            requestBody,
        };
    }
}
