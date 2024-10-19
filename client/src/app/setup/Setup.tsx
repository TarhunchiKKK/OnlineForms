import { useSetupAuth } from "./hooks";
import { TSetupProps } from "./types";

export function Setup({ children }: TSetupProps) {
    useSetupAuth();

    return <>{children}</>;
}
