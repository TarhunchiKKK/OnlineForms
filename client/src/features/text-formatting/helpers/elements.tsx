import { RenderElementProps, RenderLeafProps } from "slate-react";
import { TextMarks } from "../types";
import { CSSProperties } from "react";

export const DefaultElement = (props: RenderElementProps) => {
    return <p {...props.attributes}>{props.children}</p>;
};

export const Leaf = (props: RenderLeafProps) => {
    const style: CSSProperties = {
        fontWeight: props.leaf[TextMarks.Bold] ? "bold" : "normal",
        fontStyle: props.leaf[TextMarks.Italic] ? "italic" : "",
        textDecoration: props.leaf[TextMarks.Underline] ? "underline" : "",
    };

    return (
        <span style={style} {...props.attributes}>
            {props.children}
        </span>
    );
};
