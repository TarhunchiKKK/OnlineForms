import { TQuestionEditorFactory, questionEditorFactory } from "@/entities/questions";
import { TemplateEditorContext } from "@/shared/types";

export const questionEditorsFactories: Record<TemplateEditorContext, TQuestionEditorFactory> = {
    [TemplateEditorContext.Edit]: questionEditorFactory,
    [TemplateEditorContext.Answer]: {} as TQuestionEditorFactory,
};
