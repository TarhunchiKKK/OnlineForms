import { Editor } from "slate";
import { HotKeys } from "../types";
import { toggleFontStyle, toggleFontWeight, toggleTextDecoration } from "../helpers";

export const hotKeyHandlers: Record<HotKeys, (editor: Editor) => void> = {
    [HotKeys.Bold]: toggleFontWeight,
    [HotKeys.Italic]: toggleFontStyle,
    [HotKeys.Underlined]: toggleTextDecoration,
};
