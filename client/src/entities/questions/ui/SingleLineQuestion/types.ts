import { TemplateEditorContext } from "@/shared/types";
import { TSingleLineQuestion } from "../../models";
import { TQuestionEditor } from "../../utils";

export interface ISingleLineQuestionProps {
    question: TSingleLineQuestion;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
