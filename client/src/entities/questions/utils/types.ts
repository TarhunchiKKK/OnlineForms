import { TQuestion } from "../models";

export type TQuestionEditor = {
    createQuestion(templateId: string): void;

    updateQuestion(_: TQuestion): void;

    removeQuestion: (_: TQuestion) => void;
};

export type TQuestionEditorFactory = {
    useEditor(): TQuestionEditor;
};
