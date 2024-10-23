import { TQuestion } from "../models";

export type TQuestionEditor = {
    headerEditable: boolean;

    answerEditable: boolean;

    footerEnabled: boolean;

    create(templateId: string): void;

    update(_: TQuestion): void;

    remove: (_: TQuestion) => void;
};
