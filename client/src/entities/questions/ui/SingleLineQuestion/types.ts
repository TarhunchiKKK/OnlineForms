import { TemplateEditorContext } from "@/shared/types";
import { TSingleLineQuestion } from "../../models";
import { TQuestionEditor } from "../../types";

export interface ISingleLineQuestionProps {
    question: TSingleLineQuestion;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
