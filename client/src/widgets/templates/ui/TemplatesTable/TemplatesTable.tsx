import { Table } from "@/shared/ui";
import { TTemplatesTableProps } from "./types";
import { renderTemplatesTableRow, renderTemplatesTableHeaders } from "./helpers";

export function TemplatesTable({ templates }: TTemplatesTableProps) {
    return (
        <Table
            items={templates}
            renderItem={renderTemplatesTableRow}
            renderHeaders={renderTemplatesTableHeaders}
        />
    );
}
