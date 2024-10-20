import { IncomingMessage } from "http";

export type TRequest = IncomingMessage & {
    query?: any;

    params?: any;

    body?: any;

    [key: string]: unknown;
};
