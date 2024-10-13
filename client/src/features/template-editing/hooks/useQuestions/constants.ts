import { QuestionTypes, TCreateAnyQuestionDto } from "@/entities/questions";

export const defaultQuestion: Omit<TCreateAnyQuestionDto, "sequenceNumber"> = {
    type: QuestionTypes.SingleLine,
    title: "",
    line: "",
} as Omit<TCreateAnyQuestionDto, "sequenceNumber">;
