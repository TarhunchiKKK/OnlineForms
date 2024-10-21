import { Table } from "@/shared/ui";
import { TFormsTableProps } from "./types";
import { createSortableHeaders, renderFormsTableRow, renderFormsTableHeaders } from "./helpers";
import { useState } from "react";
import { formSortCompareers, FormsSortOrders } from "@/entities/forms";

export function FormsTable({ forms, sortable }: TFormsTableProps) {
    const [sortOrder, setSortOrder] = useState(FormsSortOrders.None);

    const sortCompareer = formSortCompareers[sortOrder];

    const sortedForms = forms.slice().sort(sortCompareer);

    const renderHeaders = sortable ? createSortableHeaders(setSortOrder) : renderFormsTableHeaders;

    return (
        <Table items={sortedForms} renderItem={renderFormsTableRow} renderHeaders={renderHeaders} />
    );
}
