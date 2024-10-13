import { Table } from "@/shared/ui";
import { TTemplatesTableProps } from "./types";
import { renderTemplateRow, renderTemplatesTableHeaders } from "./helpers";

export function TemplatesTable({ templates }: TTemplatesTableProps) {
    return (
        <Table
            items={templates}
            renderItem={renderTemplateRow}
            renderHeaders={renderTemplatesTableHeaders}
        />
    );
}
