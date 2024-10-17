import { TQuestion } from "../models";

export type TQuestionEditor = {
    headerEditable: boolean;

    answerEditable: boolean;

    footerEnabled: boolean;

    createQuestion(templateId: string): void;

    updateQuestion(_: TQuestion): void;

    removeQuestion: (_: TQuestion) => void;
};

export type TQuestionEditorFactory = {
    useEditor(): TQuestionEditor;
};
