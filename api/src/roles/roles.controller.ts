import { Controller, Get, Param, Req, UseGuards } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { TAuthorizedRequest } from "src/auth/types/request";

@Controller("roles")
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Get("/accounts/:accountId")
    @UseGuards(JwtAuthGuard)
    public async defineUserRolesOnAccount(
        @Req() request: TAuthorizedRequest,
        @Param("accountId") accountId?: string,
    ) {
        const role = await this.rolesService.defineUserRoleOnTheAccount(request.user.id, accountId);
        return { role };
    }

    @Get("/templates/:templateId")
    @UseGuards(JwtAuthGuard)
    public async defineUserRoleOnTemplate(
        @Req() request: TAuthorizedRequest,
        @Param("templateId") templateId?: string,
    ) {
        const role = await this.rolesService.defineUserRoleOnTheTemplate(
            request.user.id,
            templateId,
        );
        return { role };
    }

    @Get("/forms/:formId")
    @UseGuards(JwtAuthGuard)
    public async defineUserRoleOnForm(
        @Req() request: TAuthorizedRequest,
        @Param("formId") formId?: string,
    ) {
        const role = await this.rolesService.defineUserRoleOnTheForm(request.user.id, formId);
        return { role };
    }
}
