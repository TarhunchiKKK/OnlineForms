import { Table } from "@/shared/ui";
import { TFormsTableProps } from "./types";
import { renderFormsTableRow, renderFormsTableheaders } from "./helpers";

export function FormsTable({ forms }: TFormsTableProps) {
    return (
        <Table
            items={forms}
            renderItem={renderFormsTableRow}
            renderHeaders={renderFormsTableheaders}
        />
    );
}
