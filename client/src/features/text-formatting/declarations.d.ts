import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { TCustomElement, TCustomText } from "./types/customElements";

declare module "slate" {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: TCustomElement;
        Text: TCustomText;
    }
}
