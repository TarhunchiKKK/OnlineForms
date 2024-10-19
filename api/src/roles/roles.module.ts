import { Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { UsersModule } from "src/users/users.module";

@Module({
    imports: [UsersModule],
    providers: [RolesService],
    exports: [RolesService],
})
export class RolesModule {}
