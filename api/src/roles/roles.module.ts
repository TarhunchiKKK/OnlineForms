import { forwardRef, Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { UsersModule } from "src/users/users.module";

@Module({
    imports: [forwardRef(() => UsersModule)],
    providers: [RolesService],
    exports: [RolesService],
})
export class RolesModule {}
