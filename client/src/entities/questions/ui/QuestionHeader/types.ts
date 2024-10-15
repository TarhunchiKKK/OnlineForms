import { TemplateEditorContext } from "@/shared/types";
import { TQuestion } from "../../models";
import { TQuestionEditor } from "../../utils";

export interface IQuestionHeaderProps {
    question: TQuestion;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
