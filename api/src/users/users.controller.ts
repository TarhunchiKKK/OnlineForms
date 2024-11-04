import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Req,
    UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ProvidesOperation } from "src/roles/decorators/provides-operation.decorator";
import { OperationsOnTheAccounts } from "src/roles/enums/accounts";
import { ChangeUserStatusDto } from "./dto/change-user-status.dto";
import { ChangeUserRoleDto } from "./dto/change-user-role.dto";
import { AccountOperationGuard } from "src/roles/guards/acoount-operation.guard";
import { TAuthorizedRequest } from "src/auth/types/request";
import { parseArrayParam } from "src/shared/helpers/http";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { UserPermissionsChangeEvent } from "./events/user-permissions-change.event";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly eventEmitter: EventEmitter2,
    ) {}

    @Get()
    @ProvidesOperation(OperationsOnTheAccounts.ViewUsers)
    @UseGuards(JwtAuthGuard, AccountOperationGuard)
    public async findAllUsers() {
        return await this.usersService.findAll();
    }

    @Get("/search")
    public async search(
        @Query("count") count: string,
        @Query("search") search: string,
        @Query("ids") ids: string,
    ) {
        const parsedIds = parseArrayParam(ids, ", ");
        return await this.usersService.search(+count, search, parsedIds);
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
        await this.usersService.changeUserStatus(dto);

        this.eventEmitter.emit(
            UserPermissionsChangeEvent.EventName,
            new UserPermissionsChangeEvent(dto.id),
        );
    }

    @Patch("/role")
    @ProvidesOperation(OperationsOnTheAccounts.ChangeAdminPermissions)
    @UseGuards(JwtAuthGuard, AccountOperationGuard)
    public async changeUserRole(@Body() dto: ChangeUserRoleDto) {
        await this.usersService.changeUserRole(dto);

        this.eventEmitter.emit(
            UserPermissionsChangeEvent.EventName,
            new UserPermissionsChangeEvent(dto.id),
        );
    }

    @Patch(":id")
    @UseGuards(JwtAuthGuard)
    public async updateUser(@Param("id") userId: string, @Body() dto: UpdateUserDto) {
        return await this.usersService.update(userId, dto);
    }

    @Delete(":userId")
    @ProvidesOperation(OperationsOnTheAccounts.RemoveUser)
    @UseGuards(JwtAuthGuard, AccountOperationGuard)
    public async removeUser(@Param("userId") userId: string) {
        await this.usersService.remove(userId);

        this.eventEmitter.emit(
            UserPermissionsChangeEvent.EventName,
            new UserPermissionsChangeEvent(userId),
        );
    }

    /*------------------------------------------*/
    @Post("/admin/init")
    public async initAdmin() {
        return await this.usersService.createAdmin();
    }
}
