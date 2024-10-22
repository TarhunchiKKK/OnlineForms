import { QuestionTypes, TAnyQuestion } from "../models";

export const defaultQuestions: Record<QuestionTypes, TAnyQuestion> = {
    [QuestionTypes.SingleLine]: {
        title: "New question",
        type: QuestionTypes.SingleLine,
        isDisplayed: true,
        line: "",
    } as TAnyQuestion,
    [QuestionTypes.MultipleLines]: {
        title: "",
        type: QuestionTypes.MultipleLines,
        isDisplayed: true,
        text: "",
    } as TAnyQuestion,
    [QuestionTypes.Checkbox]: {
        title: "",
        type: QuestionTypes.Checkbox,
        isDisplayed: true,
        isChecked: false,
    } as TAnyQuestion,
    [QuestionTypes.PositiveInteger]: {
        title: "",
        type: QuestionTypes.PositiveInteger,
        isDisplayed: true,
        value: 0,
    } as TAnyQuestion,
};
