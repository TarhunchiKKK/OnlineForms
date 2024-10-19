import { Body, Controller, Get, Patch, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ProvidesOperation } from "src/roles/decorators/provides-operation.decorator";
import { OperationsOnTheAccounts } from "src/roles/enums/accounts";
import { OperationPermissionsGuard } from "src/roles/guards/operation-permissions.guard";
import { ChangeUserStatusDto } from "./dto/change-user-status.dto";
import { ChangeUserRoleDto } from "./dto/change-user-role.dto";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @ProvidesOperation(OperationsOnTheAccounts.ViewUsers)
    @UseGuards(JwtAuthGuard, OperationPermissionsGuard)
    public async findAll() {
        return await this.usersService.findAll();
    }

    @Patch("/status")
    @ProvidesOperation(OperationsOnTheAccounts.ChangeUserStatus)
    @UseGuards(JwtAuthGuard, OperationPermissionsGuard)
    public async chageUserStatus(@Body() dto: ChangeUserStatusDto) {
        return await this.usersService.changeUserStatus(dto);
    }

    @Patch("/role")
    @ProvidesOperation(OperationsOnTheAccounts.ChangeAdminPermissions)
    @UseGuards(JwtAuthGuard, OperationPermissionsGuard)
    public async changeAdminPermissions(@Body() dto: ChangeUserRoleDto) {
        return await this.usersService.changeUserRole(dto);
    }
}
