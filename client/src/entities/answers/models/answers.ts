import { TQuestion } from "@/entities/questions";

export type TAnswer = {
    id: string;

    line: string | null;

    text: string | null;

    isChecked: boolean | null;

    value: number | null;

    question: TQuestion;
};

export type TSingleLineAnswer = TAnswer & {
    line: string;

    text: null;

    isChecked: null;

    value: null;
};

export type TMultipleLinesAnswer = TAnswer & {
    line: null;

    text: string;

    isChecked: null;

    value: null;
};

export type TCheckboxAnswer = TAnswer & {
    line: null;

    text: null;

    isChecked: boolean;

    value: null;
};

export type TPositiveIntegerAnswer = TAnswer & {
    line: null;

    text: null;

    isChecked: null;

    value: number;
};

export type TAnyAnswer =
    | TSingleLineAnswer
    | TMultipleLinesAnswer
    | TCheckboxAnswer
    | TPositiveIntegerAnswer;
