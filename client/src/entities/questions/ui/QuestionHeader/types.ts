import { TemplateEditorContext } from "@/shared/types";
import { TQuestion } from "../../models";
import { TQuestionEditor } from "../../types";

export interface IQuestionHeaderProps {
    question: TQuestion;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
