import { Body, Controller, Delete, Get, Param, Patch, UseGuards } from "@nestjs/common";
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
    public async findAllUsers() {
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
    public async changeUserRole(@Body() dto: ChangeUserRoleDto) {
        return await this.usersService.changeUserRole(dto);
    }

    @Delete(":userId")
    @ProvidesOperation(OperationsOnTheAccounts.RemoveUser)
    @UseGuards(JwtAuthGuard, OperationPermissionsGuard)
    public async removeUser(@Param("userId") userId: string) {
        await this.usersService.remove(userId);
    }
}
