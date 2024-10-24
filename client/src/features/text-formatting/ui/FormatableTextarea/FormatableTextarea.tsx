import { Editable, Slate } from "slate-react";
import { useEditor } from "./useEditor";
import { IFormatableTextareaProps } from "./types";
import { FormatButtons } from "../FormatButtons";
import { useIntl } from "react-intl";

export function FormatableTextarea({ value, onChange, disabled }: IFormatableTextareaProps) {
    const { editor, renderElement, renderLeaf, handleHotkeys } = useEditor();

    const intl = useIntl();

    return (
        <Slate editor={editor} initialValue={value} onChange={onChange}>
            <Editable
                placeholder={intl.formatMessage({ id: "enter_form_description" })}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={handleHotkeys}
                className="w-full py-[16.5px] px-[14px] border-gray border-[1px] rounded-md outline-none"
                onMouseDown={(e) => {
                    if (disabled) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }}
            />

            {!disabled && <FormatButtons editor={editor} />}
        </Slate>
    );
}
