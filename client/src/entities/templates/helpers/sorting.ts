import { TTemplate } from "../models";

export enum TemplatesSortOrders {
    Title = "Title",
    Topic = "Topic",
    Creator = "Creator",
    CreatedAt = "CreatedAt",
    None = "None",
}

type TTemplateSortCompareer = (_: TTemplate, __: TTemplate) => number;

export const templatesSortComparers: Record<TemplatesSortOrders, TTemplateSortCompareer> = {
    [TemplatesSortOrders.Title]: (a, b) => {
        return a.title.localeCompare(b.title);
    },
    [TemplatesSortOrders.Topic]: (a, b) => {
        return a.topic.localeCompare(b.topic);
    },
    [TemplatesSortOrders.Creator]: (a, b) => {
        const username1 = a.creator.username ?? a.creator.email;
        const username2 = b.creator.username ?? b.creator.email;
        return username1.localeCompare(username2);
    },
    [TemplatesSortOrders.CreatedAt]: (a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    },
    [TemplatesSortOrders.None]: (_, __) => {
        return -1;
    },
};
