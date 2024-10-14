import { TemplateEditorContext } from "@/shared/types";
import { TPositiveIntegerQuestion } from "../../models";
import { TQuestionEditor, OmitId } from "../../types";

export interface IPositiveIntegerQuestionProps {
    question: OmitId<TPositiveIntegerQuestion>;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
