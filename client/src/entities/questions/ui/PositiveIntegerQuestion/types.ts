import { TemplateEditorContext } from "@/shared/types";
import { TPositiveIntegerQuestion } from "../../models";
import { TQuestionEditor } from "../../types";

export interface IPositiveIntegerQuestionProps {
    question: TPositiveIntegerQuestion;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
