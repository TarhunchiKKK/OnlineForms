import { TemplateEditorContext } from "@/shared/types";
import { TQuestion } from "../../models";
import { TQuestionEditor, OmitId } from "../../types";

export interface IQuestionHeaderProps {
    question: OmitId<TQuestion>;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
