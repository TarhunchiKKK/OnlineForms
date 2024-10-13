import { Editor } from "slate";
import { TextMarks } from "../types";
import { toggleFontStyle, toggleFontWeight, toggleTextDecoration } from "../helpers";

export const textMarksFunctions: Record<TextMarks, (editor: Editor) => void> = {
    [TextMarks.Bold]: toggleFontWeight,
    [TextMarks.Italic]: toggleFontStyle,
    [TextMarks.Underline]: toggleTextDecoration,
};
