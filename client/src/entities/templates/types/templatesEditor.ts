import { TTemplate } from "../models";

export type TTemplateEditor = {
    template: TTemplate;

    update: (_: TTemplate) => void;

    editable: boolean;
};
