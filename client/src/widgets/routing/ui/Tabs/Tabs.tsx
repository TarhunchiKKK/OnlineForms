import { renderTab } from "./helpers";
import { TTabsProps } from "./types";

export function Tabs({ tabs }: TTabsProps) {
    return (
        <nav>
            <ul className="flex flex-row justify-center items-center gap-x-16">
                {tabs.map(renderTab)}
            </ul>
        </nav>
    );
}
