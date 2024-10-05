export interface ITableProps<TItem> {
    items: TItem[];

    renderItem: (_: TItem) => JSX.Element;

    renderHeaders: () => JSX.Element;
}
