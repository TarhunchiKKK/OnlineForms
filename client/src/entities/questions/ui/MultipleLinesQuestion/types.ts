import { TemplateEditorContext } from "@/shared/types";
import { TMultipleLineQuestion } from "../../models";
import { TQuestionEditor, OmitId } from "../../types";

export interface IMultipleLinesQuestionProps {
    question: OmitId<TMultipleLineQuestion>;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
