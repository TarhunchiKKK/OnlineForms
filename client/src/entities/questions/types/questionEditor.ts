import { TQuestion } from "../models";

export interface TQuestionEditor {
    updateQuestion(_: TQuestion): void;

    removeQuestion: (_: TQuestion) => void;
}

export type TQuestionEditorFactory = {
    useEditor(): TQuestionEditor;
};
