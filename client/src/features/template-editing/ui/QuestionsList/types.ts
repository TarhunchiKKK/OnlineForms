import { TQuestion, TQuestionEditor } from "@/entities/questions";
import { TemplateEditorContext } from "@/shared/types";

export type TQuestionsListProps = {
    questions: TQuestion[];

    questionsEditor: TQuestionEditor;

    context: TemplateEditorContext;
};
