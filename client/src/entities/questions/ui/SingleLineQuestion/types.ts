import { TemplateEditorContext } from "@/shared/types";
import { TSingleLineQuestion } from "../../models";
import { TQuestionEditor, OmitId } from "../../types";

export interface ISingleLineQuestionProps {
    question: OmitId<TSingleLineQuestion>;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
