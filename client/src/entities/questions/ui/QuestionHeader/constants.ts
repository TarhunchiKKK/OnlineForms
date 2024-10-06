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
        answer: "",
    } as TAnyQuestion,
    [QuestionTypes.MultipleLines]: {
        title: "",
        type: QuestionTypes.MultipleLines,
        answer: "",
    } as TAnyQuestion,
    [QuestionTypes.Checkbox]: {
        title: "",
        type: QuestionTypes.Checkbox,
        label: "",
        isChecked: false,
    } as TAnyQuestion,
    [QuestionTypes.PositiveInteger]: {
        title: "",
        type: QuestionTypes.PositiveInteger,
        value: 5,
    } as TAnyQuestion,
};
