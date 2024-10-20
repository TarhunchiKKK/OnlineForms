import { forwardRef, Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { UsersModule } from "src/users/users.module";
import { RolesController } from "./roles.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConfig } from "src/shared/constants/jwt";

@Module({
    imports: [forwardRef(() => UsersModule), JwtModule.registerAsync(jwtConfig)],
    controllers: [RolesController],
    providers: [RolesService],
    exports: [RolesService],
})
export class RolesModule {}
