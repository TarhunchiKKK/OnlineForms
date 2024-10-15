import { QuestionTypes, TCreateQuestionDto } from "../models";

export const defaultQuestion: Omit<TCreateQuestionDto, "sequenceNumber" | "template"> = {
    type: QuestionTypes.SingleLine,
    title: "",
    line: "",
} as Omit<TCreateQuestionDto, "sequenceNumber" | "template">;
