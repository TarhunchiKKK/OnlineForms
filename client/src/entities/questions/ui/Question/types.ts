import { TemplateEditorContext } from "@/shared/types";
import { TAnyQuestion } from "../../models";
import { TQuestionEditor, OmitId } from "../../types";

export interface IQuestionProps {
    question: OmitId<TAnyQuestion>;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
