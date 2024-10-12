import { KeyboardEventHandler, useCallback, useState } from "react";
import { createEditor } from "slate";
import { RenderElementProps, RenderLeafProps, withReact } from "slate-react";
import { DefaultElement } from "../../helpers";
import { Leaf } from "../../helpers/elements";
import { HotKeys } from "../../types";
import { hotKeyHandlers } from "../../constants";

export function useEditor() {
    const [editor] = useState(() => withReact(createEditor()));

    const renderElement = useCallback((props: RenderElementProps) => {
        return <DefaultElement {...props} />;
    }, []);

    const renderLeaf = useCallback((props: RenderLeafProps) => {
        return <Leaf {...props} />;
    }, []);

    const handleHotkeys: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (!e.ctrlKey) {
            return;
        }

        if (hotKeyHandlers[e.key as HotKeys]) {
            e.preventDefault();
            hotKeyHandlers[e.key as HotKeys](editor);
        }

        switch (e.key) {
            case HotKeys.Bold:
        }
    };

    return {
        editor,
        renderElement,
        renderLeaf,
        handleHotkeys,
    };
}
