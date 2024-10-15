import { TemplateEditorContext } from "@/shared/types";
import { TQuestion } from "../../models";
import { TQuestionEditor } from "../../utils";

export interface IQuestionProps {
    question: TQuestion;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
