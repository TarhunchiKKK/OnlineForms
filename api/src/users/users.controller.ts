import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    // @ProvidesOperation(OperationsOnTheAccounts.ViewUsers)
    // @UseGuards(JwtAuthGuard)
    public async findAll() {
        return await this.usersService.findAll();
    }
}
