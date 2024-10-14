import { TQuestion } from "@/entities/questions";
import { TemplateEditorContext } from "@/shared/types";

export type TQuestionsListProps = {
    questions: TQuestion[];

    context: TemplateEditorContext;
};
