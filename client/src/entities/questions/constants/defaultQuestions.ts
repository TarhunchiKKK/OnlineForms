import { QuestionTypes, TAnyQuestion } from "../models";

export const defaultQuestions: Record<QuestionTypes, TAnyQuestion> = {
    [QuestionTypes.SingleLine]: {
        title: "New question",
        type: QuestionTypes.SingleLine,
        line: "",
    } as TAnyQuestion,
    [QuestionTypes.MultipleLines]: {
        title: "",
        type: QuestionTypes.MultipleLines,
        text: "",
    } as TAnyQuestion,
    [QuestionTypes.Checkbox]: {
        title: "",
        type: QuestionTypes.Checkbox,
        isChecked: false,
    } as TAnyQuestion,
    [QuestionTypes.PositiveInteger]: {
        title: "",
        type: QuestionTypes.PositiveInteger,
        value: 0,
    } as TAnyQuestion,
};
