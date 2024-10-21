import { THaveId } from "@/shared/types";
import { TGalleryProps } from "./types";

export function Gallery<TItem extends THaveId>({ items, renderItem }: TGalleryProps<TItem>) {
    return (
        <div className="grid grid-cols-3">
            {items.map((item) => (
                <div key={item.id}>{renderItem(item)}</div>
            ))}
        </div>
    );
}
