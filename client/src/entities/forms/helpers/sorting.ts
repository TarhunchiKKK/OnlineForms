import { TForm } from "../models";

export enum FormsSortOrders {
    Creator = "Creator",
    CreatedAt = "CreatedAt",
    None = "None",
}

type TFormsSortCompareer = (_: TForm, __: TForm) => number;

export const formSortCompareers: Record<FormsSortOrders, TFormsSortCompareer> = {
    [FormsSortOrders.Creator]: (a, b) => {
        const username1 = a.creator.username ?? a.creator.email;
        const username2 = b.creator.username ?? b.creator.email;
        return username1.localeCompare(username2);
    },
    [FormsSortOrders.CreatedAt]: (a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    },
    [FormsSortOrders.None]: (_, __) => {
        return -1;
    },
};
