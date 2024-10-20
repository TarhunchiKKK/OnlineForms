import { Body, Controller, Delete, Get, Param, Patch, Req, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ProvidesOperation } from "src/roles/decorators/provides-operation.decorator";
import { OperationsOnTheAccounts } from "src/roles/enums/accounts";
import { ChangeUserStatusDto } from "./dto/change-user-status.dto";
import { ChangeUserRoleDto } from "./dto/change-user-role.dto";
import { AccountOperationGuard } from "src/roles/guards/acoount-operation.guard";
import { TAuthorizedRequest } from "src/auth/types/request";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @ProvidesOperation(OperationsOnTheAccounts.ViewUsers)
    @UseGuards(JwtAuthGuard, AccountOperationGuard)
    public async findAllUsers() {
        return await this.usersService.findAll();
    }

    @Get("/me")
    @UseGuards(JwtAuthGuard)
    public async findMe(@Req() request: TAuthorizedRequest) {
        return await this.usersService.findMe(request.user.id);
    }

    @Patch("/status")
    @ProvidesOperation(OperationsOnTheAccounts.ChangeUserStatus)
    @UseGuards(JwtAuthGuard, AccountOperationGuard)
    public async chageUserStatus(@Body() dto: ChangeUserStatusDto) {
        return await this.usersService.changeUserStatus(dto);
    }

    @Patch("/role")
    @ProvidesOperation(OperationsOnTheAccounts.ChangeAdminPermissions)
    @UseGuards(JwtAuthGuard, AccountOperationGuard)
    public async changeUserRole(@Body() dto: ChangeUserRoleDto) {
        return await this.usersService.changeUserRole(dto);
    }

    @Delete(":userId")
    @ProvidesOperation(OperationsOnTheAccounts.RemoveUser)
    @UseGuards(JwtAuthGuard, AccountOperationGuard)
    public async removeUser(@Param("userId") userId: string) {
        await this.usersService.remove(userId);
    }
}
