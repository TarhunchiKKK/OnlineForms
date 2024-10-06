import {
    TAnyQuestion,
    TCheckboxQuestion,
    TMultipleLineQuestion,
    TPositiveIntegerQuestion,
    TQuestion,
    TSingleLineQuestion,
} from "./questions";

export type TCreateQuestionDto = Omit<TQuestion, "id">;

export type TCreateSingleLineQuestionDto = Omit<TSingleLineQuestion, "id">;

export type TCreateMultipleLinesQuestionDto = Omit<TMultipleLineQuestion, "id">;

export type TCreateCheckboxQUestionDto = Omit<TCheckboxQuestion, "id">;

export type TCreatePositiveIntegerQUestionDto = Omit<TPositiveIntegerQuestion, "id">;

export type TCreateAnyQuestionDto = Omit<TAnyQuestion, "id">;
