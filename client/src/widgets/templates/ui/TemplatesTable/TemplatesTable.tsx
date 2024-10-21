import { useState } from "react";
import { Table } from "@/shared/ui";
import { TTemplatesTableProps } from "./types";
import {
    renderTemplatesTableRow,
    renderTemplatesTableHeaders,
    createSortableHeaders,
} from "./helpers";
import { templatesSortComparers, TemplatesSortOrders } from "@/entities/templates";

export function TemplatesTable({ templates, sortable }: TTemplatesTableProps) {
    const [sortOrder, setSortOrder] = useState(TemplatesSortOrders.None);

    const sortCompareer = templatesSortComparers[sortOrder];

    const sortedTemplates = templates.slice().sort(sortCompareer);

    const renderHeaders = sortable
        ? createSortableHeaders(setSortOrder)
        : renderTemplatesTableHeaders;

    return (
        <Table
            items={sortedTemplates}
            renderItem={renderTemplatesTableRow}
            renderHeaders={renderHeaders}
        />
    );
}
