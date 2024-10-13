import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { MissingAuthTokenException } from "../exceptions/missing-token.exception";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        try {
            const authHeaders: string = request.headers.authorization;
            const [bearer, token, _] = authHeaders.split(" ");

            if (bearer !== "Bearer" || !token) {
                throw new MissingAuthTokenException();
            }

            const user = this.jwtService.verify(token);
            request.user = user;
            return true;
        } catch (exception: unknown) {
            throw exception;
        }
    }
}
