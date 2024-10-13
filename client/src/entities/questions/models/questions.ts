import { QuestionTypes } from "./enums";

export type TQuestion = {
    id: string;

    title: string;

    sequenceNumber: number;

    type: QuestionTypes;
};

export type TSingleLineQuestion = TQuestion & {
    line: string;
};

export type TMultipleLineQuestion = TQuestion & {
    text: string;
};

export type TCheckboxQuestion = TQuestion & {
    label: string;

    isChecked: boolean;
};

export type TPositiveIntegerQuestion = TQuestion & {
    value: number;
};

export type TAnyQuestion =
    | TSingleLineQuestion
    | TMultipleLineQuestion
    | TCheckboxQuestion
    | TPositiveIntegerQuestion;
