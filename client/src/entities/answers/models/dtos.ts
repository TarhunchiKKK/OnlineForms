import { TQuestion } from "@/entities/questions";

export type TCreateAnswerDto = {
    question: TQuestion;
};

export type TCreateSingleLineAnswerDto = TCreateAnswerDto & {
    line: string;
};

export type TCreateMultipleLinesAnswerDto = TCreateAnswerDto & {
    text: string;
};

export type TCreateCheckboxAnswerDto = TCreateAnswerDto & {
    isChecked: boolean;
};

export type TCreatePositiveIntegerAnswerDto = TCreateAnswerDto & {
    value: number;
};

export type TCreateAnyAnswerDto =
    | TCreateSingleLineAnswerDto
    | TCreateMultipleLinesAnswerDto
    | TCreateCheckboxAnswerDto
    | TCreatePositiveIntegerAnswerDto;

export type TUpdateAnswerDto = {
    id: string;

    line: string | null;

    text: string | null;

    isChecked: boolean | null;

    value: number | null;
};
