import { TemplateEditorContext } from "@/shared/types";
import { TMultipleLineQuestion } from "../../models";
import { TQuestionEditor } from "../../types";

export interface IMultipleLinesQuestionProps {
    question: TMultipleLineQuestion;

    questionEditor: TQuestionEditor;

    context: TemplateEditorContext;
}
