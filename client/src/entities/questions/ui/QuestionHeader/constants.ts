import { QuestionTypes, TAnyQuestion } from "../../models";

export const defaultTitlePlaceholder = "Enter title";

export const questionTypesDropdownOptions = [
    {
        label: "Single Line",
        value: QuestionTypes.SingleLine,
    },
    {
        label: "Multiple Lines",
        value: QuestionTypes.MultipleLines,
    },
    {
        label: "Checkbox",
        value: QuestionTypes.Checkbox,
    },
    {
        label: "Positive Integer",
        value: QuestionTypes.PositiveInteger,
    },
];

export const defaultQuestions: Record<QuestionTypes, TAnyQuestion> = {
    [QuestionTypes.SingleLine]: {
        title: "",
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
