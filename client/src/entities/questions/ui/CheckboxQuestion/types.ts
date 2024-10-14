import { TemplateEditorContext } from "@/shared/types";
import { TCheckboxQuestion } from "../../models";
import { TQuestionEditor, OmitId } from "../../types";

export interface ICheckboxQuestionProps {
    question: OmitId<TCheckboxQuestion>;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
