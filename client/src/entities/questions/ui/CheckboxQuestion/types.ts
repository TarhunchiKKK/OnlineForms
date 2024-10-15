import { TemplateEditorContext } from "@/shared/types";
import { TCheckboxQuestion } from "../../models";
import { TQuestionEditor } from "../../utils";

export interface ICheckboxQuestionProps {
    question: TCheckboxQuestion;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
