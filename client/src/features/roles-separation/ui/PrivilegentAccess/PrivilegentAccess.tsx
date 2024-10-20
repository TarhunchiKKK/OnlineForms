import { TPrivilegentAccessProps } from "./types";
import { checkAvailability } from "./helpers";

export function PrivilegentAccess({ role, operation, children }: TPrivilegentAccessProps) {
    if (!role) {
        return <></>;
    }

    const isAvailable = checkAvailability(role, operation);

    return <>{isAvailable ? children : <></>}</>;
}
