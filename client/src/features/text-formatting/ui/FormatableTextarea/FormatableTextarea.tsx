import { Editable, Slate } from "slate-react";
import { useEditor } from "./useEditor";
import { IFormatableTextareaProps } from "./types";
import { FormatButtons } from "../FormatButtons";

export function FormatableTextarea({ value, onChange }: IFormatableTextareaProps) {
    const { editor, renderElement, renderLeaf, handleHotkeys } = useEditor();

    return (
        <Slate editor={editor} initialValue={value} onChange={onChange}>
            <Editable
                placeholder="Enter your text..."
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={handleHotkeys}
                className="w-full py-[16.5px] px-[14px] border-gray border-[1px] rounded-md mb-2 outline-none"
            />

            <FormatButtons editor={editor} />
        </Slate>
    );
}
