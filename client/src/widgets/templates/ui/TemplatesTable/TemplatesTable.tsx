import { Table } from "@/shared/ui";
import { ITemplatesTableProps } from "./types";
import { renderTemplateRow, renderTemplatesTableHeaders } from "./helpers";

export function TemplatesTable({ templates }: ITemplatesTableProps) {
    return (
        <Table
            items={templates}
            renderItem={renderTemplateRow}
            renderHeaders={renderTemplatesTableHeaders}
        />
    );
}
