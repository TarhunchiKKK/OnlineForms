import { QuestionTypes } from "../../models";

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
