export enum QuestionTypes {
    SingleLine = "Single Line",
    MultipleLines = "Multiple Lines",
    Checkbox = "Checkbox",
    PositiveInteger = "Positive Integer",
}

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
