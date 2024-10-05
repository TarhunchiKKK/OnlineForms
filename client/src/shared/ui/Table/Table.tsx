import { ITableProps } from "./types";

export function Table<TItem>({ items, renderItem, renderHeaders }: ITableProps<TItem>) {
    return (
        <table className="w-full">
            <thead>{renderHeaders()}</thead>

            <tbody>{items.map(renderItem)}</tbody>
        </table>
    );
}
