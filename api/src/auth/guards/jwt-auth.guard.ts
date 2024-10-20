import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { MissingAuthTokenException } from "../exceptions/missing-token.exception";
import { JwtService } from "@nestjs/jwt";
import { TUserProfile } from "../types/user-profile.type";
import { TRequest } from "src/shared/types/request";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest() as TRequest;

        try {
            const authHeaders: string = request.headers.authorization;
            const [bearer, token, _] = authHeaders.split(" ");

            console.log(token);
            if (bearer !== "Bearer" || !token) {
                throw new MissingAuthTokenException();
            }

            const { password, ...userProfile } = this.jwtService.verify(token) as TUserProfile;
            request.user = userProfile;
            return true;
        } catch (exception: unknown) {
            throw exception;
        }
    }
}
