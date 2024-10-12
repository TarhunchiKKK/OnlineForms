import { Editor } from "slate";
import { TextMarks } from "../types";

export const toggleFontWeight = (editor: Editor) => {
    Editor.addMark(editor, TextMarks.Bold, true);
};

export const toggleFontStyle = (editor: Editor) => {
    Editor.addMark(editor, TextMarks.Italic, true);
};

export const toggleTextDecoration = (editor: Editor) => {
    Editor.addMark(editor, TextMarks.Underline, true);
};
