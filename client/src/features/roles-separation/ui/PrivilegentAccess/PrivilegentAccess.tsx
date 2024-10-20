import { checkAvailability } from "../../helpers";
import { TPrivilegentAccessProps } from "./types";

export function PrivilegentAccess({ role, operation, children }: TPrivilegentAccessProps) {
    if (!role) {
        return <></>;
    }

    const isAvailable = checkAvailability(role, operation);

    return <>{isAvailable ? children : <></>}</>;
}
