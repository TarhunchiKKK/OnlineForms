import { Navigate } from "react-router-dom";
import { TPrivilegentRedirectProps } from "./types";
import { checkAvailability } from "../../helpers";

export function PrivilegentRedirect({
    role,
    operation,
    children,
    route,
}: TPrivilegentRedirectProps) {
    if (!role) {
        return <></>;
    }

    const isAvailable = checkAvailability(role, operation);

    if (!isAvailable) {
        return <Navigate to={route} replace={true} />;
    }

    return <>{children}</>;
}
