import { TextMarks } from "./enums";

export type TCustomText = {
    text: string;
    [TextMarks.Bold]?: boolean;
    [TextMarks.Italic]?: boolean;
    [TextMarks.Underline]?: boolean;
};

export type TCustomElement = {
    type: "paragraph";

    children: TCustomText[];
};
