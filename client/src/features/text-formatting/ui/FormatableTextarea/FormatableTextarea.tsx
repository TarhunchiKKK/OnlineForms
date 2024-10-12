import { Editable, Slate } from "slate-react";
import { inputClassName } from "@/shared/constants";
import { useEditor } from "./useEditor";
import { IFormatableTextareaProps } from "./types";
import { FormatButtons } from "../FormatButtons";

export function FormatableTextarea({ value, onChange }: IFormatableTextareaProps) {
    const { editor, renderElement, renderLeaf, handleHotkeys } = useEditor();

    return (
        <Slate editor={editor} initialValue={value} onChange={onChange}>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={handleHotkeys}
                className={inputClassName}
            />

            <FormatButtons editor={editor} />
        </Slate>
    );
}
