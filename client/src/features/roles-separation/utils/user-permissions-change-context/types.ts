import { UserPermissionsObserver } from "../";

export type TContextState = {
    observer: UserPermissionsObserver | null;
};

export type TContextProps = {
    children: JSX.Element | JSX.Element[];
};
