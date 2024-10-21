import { ReactNode } from "react";

export type TGalleryProps<TItem> = {
    items: TItem[];

    renderItem: (_: TItem) => ReactNode;
};
