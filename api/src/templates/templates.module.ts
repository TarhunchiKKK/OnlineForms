import { Module } from "@nestjs/common";
import { TemplatesService } from "./templates.service";
import { TemplatesController } from "./templates.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Template } from "./entities/template.entity";
import { JwtModule } from "@nestjs/jwt";
import { TemplatesGateway } from "./templates.gateway";
import { jwtConfig } from "src/shared/constants/jwt";

@Module({
    imports: [TypeOrmModule.forFeature([Template]), JwtModule.registerAsync(jwtConfig)],
    controllers: [TemplatesController],
    providers: [TemplatesGateway, TemplatesService],
})
export class TemplatesModule {}
