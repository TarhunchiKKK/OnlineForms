import { QuestionTypes, TCreateSingleLineQuestionDto } from "@/entities/questions";

export const defaultQuestion: Omit<TCreateSingleLineQuestionDto, "sequenceNumber"> = {
    type: QuestionTypes.SingleLine,
    title: "",
    line: "",
};
